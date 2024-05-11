// 上滾動
function navigateUp() {
  if (curPage === 0) return;
  curPage--;
  pagination();
}
// 下滾動
function navigateDown() {
  if (curPage === numOfPages) return;
  curPage++;
  pagination();
}
// 滾動至上/下區塊
function pagination() {
  scrollLock = true;
  $body.stop().animate(
    {
      scrollTop: $section.eq(curPage).offset().top,
    },
    1000,
    "swing",
    function () {
      scrollLock = false;
    }
  );
}
