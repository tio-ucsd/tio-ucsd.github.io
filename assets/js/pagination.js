/*!
 * Copyright (c) 2024, The Intermission Orchestra at UC San Diego.
 *
 * pagination.js is used for pagination on about.html and recordings.html
 *
 * VSCode Dev Note:
 * Shift+Option+F (Mac) or Shift+Alt+F (Windows) to format code for readability.
 * When done editing, please minify code again to reduce file size!
 */
let currentPage=1,itemsPerPage=1;const GRID_NUM=6,galleryContainer=document.getElementById("gallery-container"),galleryItems=Array.from(galleryContainer.children);function renderGrid(){itemsPerPage=6,galleryContainer.innerHTML="";const e=(currentPage-1)*itemsPerPage,t=e+itemsPerPage;galleryItems.slice(e,t).forEach((e=>{galleryContainer.appendChild(e)}))}function renderSlideshow(){galleryContainer.innerHTML="",galleryContainer.appendChild(galleryItems[currentPage-1])}function changePage(e){const t=Math.ceil(galleryItems.length/itemsPerPage);currentPage+=e,currentPage<1?currentPage=t:currentPage>t&&(currentPage=1),6==itemsPerPage?renderGrid():1==itemsPerPage&&renderSlideshow(),updatePaginationInfo()}function updatePaginationInfo(){const e=document.getElementById("page-info");if(6==itemsPerPage)e.textContent=`Page ${currentPage} of ${Math.ceil(galleryItems.length/itemsPerPage)}`;else if(1==itemsPerPage){let t=galleryItems[currentPage-1].getElementsByClassName("text")[0].innerHTML;e.textContent=t}}