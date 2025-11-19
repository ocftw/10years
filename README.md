# OCF 10 Years 網站 

## Github LFS 說明

2025/11/19 

已將 `.wav` 與 `.ai` 大型媒體檔移轉到 Git LFS，並重寫歷史，以縮小 repo 大小。

- `.wav`、`.ai` 檔案會自動由 LFS 追蹤
- 新增或修改這些檔案後，使用一般 `git add` / `git commit` 流程即可；Git 會自動寫入 LFS pointer

Clone 後需執行 `git lfs install` 以安裝 Git LFS。
如先前有舊的 repository，請改以 `git fetch --all` 後重新 checkout branch，以避免與重寫後的歷史衝突。
