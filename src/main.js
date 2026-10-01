import "./style.css";
import products from "./products.json";

const img = (url) => `https://media.zid.store/cdn-cgi/image/w=600,q=80,f=auto/${url}`;

const grid = document.querySelector("[data-products]");
grid.innerHTML = products
  .map(
    (p) => `
  <div class="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-brand/10 transition hover:-translate-y-1 hover:shadow-lg ${p.out ? "opacity-70" : ""}">
    <a href="${p.url}" target="_blank" rel="noopener" class="relative block aspect-square overflow-hidden bg-cream">
      ${p.img ? `<img src="${img(p.img)}" alt="${p.name}" loading="lazy" class="h-full w-full object-cover transition duration-300 hover:scale-105" />` : ""}
      ${p.out ? `<span class="absolute top-4 right-4 rounded-full bg-slate-700 px-3 py-1 text-xs font-bold text-white">نفدت الكمية</span>` : ""}
    </a>
    <div class="flex flex-1 flex-col p-5">
      <h3 class="flex-1 text-lg font-bold text-brand-dark">${p.name}</h3>
      <div class="mt-4 flex items-center justify-between gap-3">
        <span class="text-2xl font-extrabold text-brand">${p.price} <span class="text-sm font-medium">ر.س</span></span>
        <a href="${p.url}" target="_blank" rel="noopener" class="rounded-full ${p.out ? "bg-slate-300 text-slate-600" : "bg-brand text-white hover:bg-brand-dark"} px-5 py-2.5 text-sm font-bold">${p.out ? "عرض المنتج" : "اطلب الآن"}</a>
      </div>
    </div>
  </div>`
  )
  .join("");

const btn = document.querySelector("[data-nav-toggle]");
const menu = document.querySelector("[data-nav-menu]");
btn?.addEventListener("click", () => menu?.classList.toggle("hidden"));

document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = String(new Date().getFullYear())));
