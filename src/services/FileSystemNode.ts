import fs from "node:fs"
import { FileSystem } from "./FileSystem.js"

export class FileSystemNode implements FileSystem {
  readFileSync(path: string): string {
    const readFileSync = fs.readFileSync(path)
    return readFileSync.toString("utf-8")
  }
}
