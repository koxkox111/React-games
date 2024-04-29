import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public/Charades', 'data.json');
  const fileData = await fs.promises.readFile(filePath, 'utf8');
  const jsonData = JSON.parse(fileData);

  res.status(200).json(jsonData);
}