import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function doctorPhotoUploadPlugin(): Plugin {
  return {
    name: 'doctor-photo-upload-plugin',
    configureServer(server) {
      server.middlewares.use('/api/upload-doctor-photo', (req, res) => {
        if (req.method === 'POST') {
          const chunks: any[] = [];
          req.on('data', (chunk) => chunks.push(chunk));
          req.on('end', () => {
            try {
              const body = JSON.parse(Buffer.concat(chunks).toString());
              if (body && body.dataUrl) {
                const matches = body.dataUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
                if (matches && matches.length === 3) {
                  const buffer = Buffer.from(matches[2], 'base64');
                  const publicDir = path.resolve(process.cwd(), 'public');
                  const assetsDir = path.resolve(process.cwd(), 'src/assets');
                  const distDir = path.resolve(process.cwd(), 'dist');

                  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
                  if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

                  fs.writeFileSync(path.join(publicDir, 'doctor.jpg'), buffer);
                  fs.writeFileSync(path.join(assetsDir, 'doctor.jpg'), buffer);
                  fs.writeFileSync(
                    path.join(assetsDir, 'doctorPhotoData.ts'),
                    `export const DOCTOR_NEW_PHOTO_BASE64 = ${JSON.stringify(body.dataUrl)};\n`
                  );
                  if (fs.existsSync(distDir)) {
                    fs.writeFileSync(path.join(distDir, 'doctor.jpg'), buffer);
                  }

                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ success: true }));
                  return;
                }
              }
              res.writeHead(400, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Invalid photo data' }));
            } catch (err: any) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: err?.message || 'Server error' }));
            }
          });
        } else {
          res.writeHead(405, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Method not allowed' }));
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), doctorPhotoUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâ€”file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
