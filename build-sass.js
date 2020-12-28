const sass = require("sass");
const path = require("path");
const fs = require("fs");

const result = sass.renderSync({
    file: "src/themes/bootstrap.scss",
    importer: (url, prev, done) => {
        if (!url.startsWith("~")) {
            return { file: url };
        }
        url = url.slice(1);
        const dir = path.dirname(url);
        const file = path.basename(url);
        const tryFiles = [
            url,
            path.join(dir, `${file}`),
            path.join(dir, `${file}.scss`),
            path.join(dir, `${file}.sass`),
            path.join(dir, `_${file}`),
            path.join(dir, `_${file}.scss`),
            path.join(dir, `_${file}.sass`),
        ];
        const found = tryFiles
            .map((f) => {
                try {
                    return require.resolve(f);
                } catch (e) {
                    return null;
                }
            })
            .find((f) => f != null);
        if (found == null) {
            return new Error(`File not found, tried ${tryFiles.join(", ")}`);
        }
        return { file: found };
    },
});

fs.writeFileSync("dist/themes/bootstrap.css", result.css);
