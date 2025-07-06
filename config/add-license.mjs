import { promises as fs } from "fs";
import path from "path";

const distJsPath = path.join(process.cwd(), "dist", "assets", "js");
const banner =
  "/*! Please refer to license.txt for the details of the license. */\n";

try {
  const files = await fs.readdir(distJsPath);
  for (const file of files) {
    if (file.endsWith(".js")) {
      const fullPath = path.join(distJsPath, file);
      const content = await fs.readFile(fullPath, "utf-8");
      if (!content.startsWith("/*!")) {
        await fs.writeFile(fullPath, banner + content);
        console.log(`ライセンステキスト追加したよ: ${file}`);
      } else {
        console.log(`ライセンステキストもうあるよ: ${file}`);
      }
    }
  }
} catch (err) {
  console.error("JS処理中にエラーが発生したよ:", err);
}
