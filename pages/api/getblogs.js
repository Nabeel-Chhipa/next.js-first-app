import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
    {
        err ? res.status(500).json({ error: `${req.query.slug} blog was not found.` }) : res.status(200).json(JSON.parse(data))
    }
  });
}
