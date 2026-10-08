// Número do WhatsApp para reservas (DDI + DDD + número, só dígitos)
const WHATSAPP = "5512992473567";

// Links de WhatsApp com mensagem pronta
document.querySelectorAll("[data-wa]").forEach((el) => {
  el.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(el.dataset.wa)}`;
  el.target = "_blank";
  el.rel = "noopener";
});

// Menu mobile
const menuBtn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  menuBtn.setAttribute("aria-expanded", aberto);
});
menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.classList.remove("aberto");
    menuBtn.setAttribute("aria-expanded", "false");
  })
);

// Ano atual no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Animação suave ao rolar
if ("IntersectionObserver" in window) {
  const alvos = document.querySelectorAll(
    ".cabecalho-secao, .duas-col > *, .quarto, .avaliacao, .pacote, .atracoes li, .contato > *"
  );
  const obs = new IntersectionObserver(
    (entradas) =>
      entradas.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visivel");
          obs.unobserve(e.target);
        }
      }),
    { threshold: 0.12 }
  );
  alvos.forEach((el) => {
    el.classList.add("revelar");
    obs.observe(el);
  });
}
