/* ===============================
   База данных товаров «Горбушка Тех»
   =============================== */
const PRODUCTS = {
  "rtx-4070-super": {
    title: "Видеокарта MSI GeForce RTX 4070 SUPER GAMING X SLIM 12GB",
    sku: "GT-GPU-4070S",
    category: "gpu",
    badge: "Хит",
    badgeType: "featured",
    rating: "4.9",
    reviewsCount: 48,
    price: 68990,
    oldPrice: null,
    discountPercent: null,
    image: "images/gpu-rtx4070.webp",
    alt: "Видеокарта MSI GeForce RTX 4070 SUPER GAMING X SLIM 12GB с системой охлаждения из трёх вентиляторов",
    description:
      "Производительная игровая видеокарта архитектуры Ada Lovelace с поддержкой DLSS 3.5 и 12 ГБ памяти GDDR6X. Отличный выбор для 2K-гейминга и рендеринга.",
    advantages: [
      "Проверка под нагрузкой на стенде в павильоне B2-114",
      "Официальная гарантия магазина 36 месяцев",
      "Тихая система охлаждения TRI FROZR 3",
      "В наличии на складе ТЦ «Горбушкин Двор»",
    ],
    specs: [
      ["Графический процессор", "NVIDIA GeForce RTX 4070 SUPER"],
      ["Объём и тип памяти", "12 ГБ GDDR6X, 192-bit"],
      ["Частота Boost", "до 2640 МГц"],
      ["Интерфейс подключения", "PCI Express 4.0 x16"],
      ["Разъёмы вывода", "3x DisplayPort 1.4a, 1x HDMI 2.1a"],
      ["Рекомендуемый БП", "от 650 Вт (разъём 16-pin 12VHPWR)"],
    ],
  },
  "rtx-4080-super": {
    title: "Видеокарта ASUS TUF Gaming GeForce RTX 4080 SUPER OC 16GB",
    sku: "GT-GPU-4080S",
    category: "gpu",
    badge: "Скидка -10%",
    badgeType: "discount",
    rating: "5.0",
    reviewsCount: 31,
    price: 116900,
    oldPrice: 129900,
    discountPercent: 10,
    image: "images/gpu-rtx4080.webp",
    alt: "Видеокарта ASUS TUF Gaming GeForce RTX 4080 SUPER OC 16GB в усиленном металлическом кожухе",
    description:
      "Флагманская видеокарта для 4K-гейминга на максимальных настройках, трассировки лучей и работы с нейросетями.",
    advantages: [
      "Заводской разгон OC Edition и металлический бэкплейт",
      "Бесплатный самовывоз в день заказа на Горбушке",
      "Гарантия 36 месяцев",
    ],
    specs: [
      ["Графический процессор", "NVIDIA GeForce RTX 4080 SUPER"],
      ["Объём и тип памяти", "16 ГБ GDDR6X, 256-bit"],
      ["Частота Boost", "до 2640 МГц (OC)"],
      ["Охлаждение", "3 вентилятора Axial-tech"],
      ["Разъёмы", "3x DisplayPort 1.4a, 2x HDMI 2.1a"],
      ["Рекомендуемый БП", "от 750 Вт"],
    ],
  },
  "rx-7800-xt": {
    title: "Видеокарта Sapphire NITRO+ AMD Radeon RX 7800 XT 16GB",
    sku: "GT-GPU-7800XT",
    category: "gpu",
    badge: "Выбор геймеров",
    badgeType: "featured",
    rating: "4.8",
    reviewsCount: 27,
    price: 58490,
    oldPrice: null,
    discountPercent: null,
    image: "images/gpu-rx7800.webp",
    alt: "Видеокарта Sapphire NITRO+ AMD Radeon RX 7800 XT 16GB с тремя вентиляторами и RGB-полосой",
    description:
      "Оптимальное соотношение цены и FPS в разрешении 1440p с большим запасом видеопамяти 16 ГБ GDDR6.",
    advantages: [
      "16 ГБ видеопамяти для современных AAA-игр",
      "Массивная испарительная камера и тихие вентиляторы",
      "Проверка пломб и серийного номера при получении",
    ],
    specs: [
      ["Графический процессор", "AMD Radeon RX 7800 XT"],
      ["Объём и тип памяти", "16 ГБ GDDR6, 256-bit"],
      ["Частота Boost", "до 2565 МГц"],
      ["Питание", "2x 8-pin PCIe"],
      ["Рекомендуемый БП", "от 700 Вт"],
    ],
  },
  "ryzen-7-7800x3d": {
    title: "Процессор AMD Ryzen 7 7800X3D AM5 OEM",
    sku: "GT-CPU-7800X3D",
    category: "cpu",
    badge: "Хит",
    badgeType: "featured",
    rating: "5.0",
    reviewsCount: 84,
    price: 41900,
    oldPrice: null,
    discountPercent: null,
    image: "images/cpu-ryzen7.webp",
    alt: "Процессор AMD Ryzen 7 7800X3D для сокета AM5 с технологией 3D V-Cache",
    description:
      "Один из лучших игровых процессоров с увеличенным до 96 МБ кэшем L3 по технологии AMD 3D V-Cache.",
    advantages: [
      "8 ядер / 16 потоков и низкое тепловыделение",
      "Подбор материнской платы B650 и памяти DDR5 в нашем павильоне",
      "Гарантия 12 месяцев (OEM)",
    ],
    specs: [
      ["Сокет", "AM5"],
      ["Количество ядер / потоков", "8 / 16"],
      ["Базовая / Boost частота", "4.2 / 5.0 ГГц"],
      ["Кэш L3", "96 МБ (3D V-Cache)"],
      ["Поддержка памяти", "DDR5-5200+"],
      ["TDP", "120 Вт"],
    ],
  },
  "core-i7-14700k": {
    title: "Процессор Intel Core i7-14700K LGA1700 BOX",
    sku: "GT-CPU-14700K",
    category: "cpu",
    badge: "Скидка -12%",
    badgeType: "discount",
    rating: "4.8",
    reviewsCount: 42,
    price: 43900,
    oldPrice: 49900,
    discountPercent: 12,
    image: "images/cpu-intel-i7.webp",
    alt: "Процессор Intel Core i7-14700K для сокета LGA1700 в заводской упаковке",
    description:
      "20-ядерный гибридный процессор для тяжёлого монтажа видео, компиляции проектов и игр с высокой частотой кадров.",
    advantages: [
      "8 производительных P-ядер + 12 энергоэффективных E-ядер",
      "Встроенная графика Intel UHD Graphics 770",
      "Разблокированный множитель для разгона",
    ],
    specs: [
      ["Сокет", "LGA1700"],
      ["Количество ядер / потоков", "20 (8P + 12E) / 28"],
      ["Максимальная частота Turbo", "до 5.6 ГГц"],
      ["Кэш L3", "33 МБ"],
      ["Поддержка памяти", "DDR5-5600 / DDR4-3200"],
    ],
  },
  "ryzen-5-7500f": {
    title: "Процессор AMD Ryzen 5 7500F AM5 OEM",
    sku: "GT-CPU-7500F",
    category: "cpu",
    badge: "Новинка",
    badgeType: "new",
    rating: "4.9",
    reviewsCount: 65,
    price: 15990,
    oldPrice: null,
    discountPercent: null,
    image: "images/cpu-ryzen5.webp",
    alt: "Процессор AMD Ryzen 5 7500F для платформы AM5",
    description:
      "Лучший народный процессор на платформу AM5 с поддержкой DDR5 и PCIe 5.0 по доступной цене.",
    advantages: [
      "Идеальная база под RTX 4060 / RTX 4070",
      "Отлично охлаждается обычным башенным кулером",
      "Проверка ножек/контактов перед выдачей",
    ],
    specs: [
      ["Сокет", "AM5"],
      ["Количество ядер / потоков", "6 / 12"],
      ["Базовая / Boost частота", "3.7 / 5.0 ГГц"],
      ["Кэш L3", "32 МБ"],
      ["TDP", "65 Вт"],
    ],
  },
  "iphone-16-pro": {
    title: "Смартфон Apple iPhone 16 Pro 256GB Natural Titanium",
    sku: "GT-PHN-IP16P256",
    category: "phones",
    badge: "Новинка",
    badgeType: "new",
    rating: "5.0",
    reviewsCount: 54,
    price: 119990,
    oldPrice: null,
    discountPercent: null,
    image: "images/phone-iphone16.webp",
    alt: "Смартфон Apple iPhone 16 Pro 256GB в корпусе цвета Натуральный Титан с тройной камерой",
    description:
      "Оригинальный iPhone 16 Pro (nano-SIM + eSIM) с чипом A18 Pro, дисплеем 120 Гц ProMotion и кнопкой Camera Control.",
    advantages: [
      "Только запечатанные устройства с проверкой IMEI на месте",
      "Помощь с переносом данных и банковских приложений",
      "Защитное стекло в подарок при самовывозе",
    ],
    specs: [
      ["Дисплей", '6.3" Super Retina XDR OLED, 120 Гц'],
      ["Процессор", "Apple A18 Pro"],
      ["Память", "256 ГБ"],
      ["Камеры", "48 МП + 48 МП + 12 МП (5x зум)"],
      ["SIM-карты", "nano-SIM + eSIM"],
      ["Материал корпуса", "Титан Grade 5"],
    ],
  },
  "galaxy-s24-ultra": {
    title: "Смартфон Samsung Galaxy S24 Ultra 12/256GB Titanium Gray",
    sku: "GT-PHN-S24U256",
    category: "phones",
    badge: "Скидка -15%",
    badgeType: "discount",
    rating: "4.9",
    reviewsCount: 39,
    price: 94990,
    oldPrice: 111990,
    discountPercent: 15,
    image: "images/phone-s24.webp",
    alt: "Смартфон Samsung Galaxy S24 Ultra в титаново-сером корпусе со стилусом S Pen",
    description:
      "Флагман с антибликовым экраном Dynamic AMOLED 2X, встроенным стилусом S Pen, камерой 200 МП и функциями Galaxy AI.",
    advantages: [
      "Глобальная версия с поддержкой Samsung Pay и русского языка",
      "Процессор Snapdragon 8 Gen 3 for Galaxy",
      "Гарантия 12 месяцев от нашего сервисного центра",
    ],
    specs: [
      ["Дисплей", '6.8" Dynamic AMOLED 2X, QHD+, 120 Гц'],
      ["Процессор", "Snapdragon 8 Gen 3 for Galaxy"],
      ["Память", "12 / 256 ГБ"],
      ["Основная камера", "200 МП + 50 МП + 12 МП + 10 МП"],
      ["Аккумулятор", "5000 мА·ч, быстрая зарядка 45 Вт"],
    ],
  },
  "xiaomi-14-ultra": {
    title: "Смартфон Xiaomi 14 Ultra 16/512GB Black",
    sku: "GT-PHN-XM14U",
    category: "phones",
    badge: "Новинка",
    badgeType: "new",
    rating: "4.8",
    reviewsCount: 22,
    price: 99990,
    oldPrice: null,
    discountPercent: null,
    image: "images/phone-xiaomi14.webp",
    alt: "Смартфон Xiaomi 14 Ultra чёрного цвета с крупным круглым блоком камер Leica",
    description:
      "Камерофон с дюймовым сенсором Sony LYT-900 и оптикой Leica Summilux, 16 ГБ ОЗУ и накопителем 512 ГБ.",
    advantages: [
      "Зарядный блок 90 Вт в комплекте (Global EAC)",
      "Переменная диафрагма f/1.63–f/4.0",
      "Быстрая доставка курьером по Москве за 3 часа",
    ],
    specs: [
      ["Дисплей", '6.73" LTPO AMOLED 120 Гц'],
      ["Процессор", "Qualcomm Snapdragon 8 Gen 3"],
      ["Память", "16 / 512 ГБ"],
      ["Камера", "4x 50 МП Leica Summilux"],
      ["Аккумулятор", "5000 мА·ч, зарядка 90 Вт / 80 Вт беспроводная"],
    ],
  },
  "ssd-990-pro": {
    title: "SSD-накопитель Samsung 990 PRO 2TB M.2 NVMe",
    sku: "GT-PER-990PRO2T",
    category: "peripherals",
    badge: "Хит",
    badgeType: "featured",
    rating: "5.0",
    reviewsCount: 73,
    price: 19490,
    oldPrice: null,
    discountPercent: null,
    image: "images/ssd-990pro.webp",
    alt: "Твердотельный накопитель Samsung 990 PRO 2TB формата M.2 2280 NVMe",
    description:
      "Скоростной SSD формата M.2 PCIe 4.0 x4 для ПК и PlayStation 5 со скоростью чтения до 7450 МБ/с.",
    advantages: [
      "Оригинальный контроллер Samsung Pascal",
      "Подходит для расширения памяти PS5 и игровых ноутбуков",
      "Ресурс записи 1200 TBW",
    ],
    specs: [
      ["Форм-фактор", "M.2 2280"],
      ["Интерфейс", "PCIe 4.0 x4, NVMe 2.0"],
      ["Скорость чтения / записи", "до 7450 / 6900 МБ/с"],
      ["Ресурс (TBW)", "1200 ТБ"],
    ],
  },
  "keyboard-keychron": {
    title: "Клавиатура Keychron K2 Pro QMK/VIA Wireless RGB",
    sku: "GT-PER-K2PRO",
    category: "peripherals",
    badge: "Скидка -15%",
    badgeType: "discount",
    rating: "4.8",
    reviewsCount: 29,
    price: 10990,
    oldPrice: 12990,
    discountPercent: 15,
    image: "images/keyboard-keychron.webp",
    alt: "Беспроводная механическая клавиатура Keychron K2 Pro формата 75% с тёмными и оранжевыми клавишами",
    description:
      "Компактная беспроводная механика с PBT-кейкапами, поддержкой Hot-Swap и совместимостью с macOS и Windows.",
    advantages: [
      "Заводская шумоизоляция и смазанные стабилизаторы",
      "Программирование любых клавиш через QMK / VIA",
      "Работа по Bluetooth 5.1 и кабелю USB-C",
    ],
    specs: [
      ["Формат", "75% (84 клавиши)"],
      ["Переключатели", "Keychron K Pro Red (Hot-Swap)"],
      ["Подключение", "Bluetooth 5.1 (до 3 устройств) / USB-C"],
      ["Кейкапы", "Double-shot PBT"],
    ],
  },
  "mouse-superlight": {
    title: "Игровая мышь Logitech G PRO X SUPERLIGHT 2 Black",
    sku: "GT-PER-GPX2",
    category: "peripherals",
    badge: "",
    badgeType: "",
    rating: "4.9",
    reviewsCount: 44,
    price: 14490,
    oldPrice: null,
    discountPercent: null,
    image: "images/mouse-superlight.webp",
    alt: "Ультралёгкая беспроводная игровая мышь Logitech G PRO X SUPERLIGHT 2 чёрного цвета",
    description:
      "Киберспортивная беспроводная мышь весом всего 60 г с сенсором HERO 2 и гибридными переключателями LIGHTFORCE.",
    advantages: [
      "Вес 60 граммов и тефлоновые глайды без добавок",
      "До 95 часов автономной работы, зарядка USB-C",
      "Частота опроса до 4000 Гц через LIGHTSPEED",
    ],
    specs: [
      ["Сенсор", "HERO 2 (до 32 000 DPI)"],
      ["Вес", "60 г"],
      ["Подключение", "LIGHTSPEED 2.4 ГГц / USB-C"],
      ["Автономность", "до 95 ч"],
    ],
  },
};

function formatPrice(value) {
  return `${value.toLocaleString("ru-RU")} ₽`;
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initScrollTop();
  initProductPage();
  initCatalogFilters();
  initOrderDialogAndForm();
});

/* ===============================
   1. Адаптивное мобильное меню
   =============================== */
function initMobileNav() {
  const toggleBtn = document.getElementById("nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggleBtn || !nav) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("site-nav--open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });
}

/* ===============================
   2. Кнопка «Наверх»
   =============================== */
function initScrollTop() {
  const scrollBtn = document.getElementById("scroll-top");
  if (!scrollBtn) return;

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("scroll-top--visible");
    } else {
      scrollBtn.classList.remove("scroll-top--visible");
    }
  };

  window.addEventListener("scroll", toggleVisibility, { passive: true });
  toggleVisibility();
}

/* ===============================
   3. Динамическая карточка товара (product.html)
   =============================== */
function initProductPage() {
  const titleEl = document.getElementById("product-title");
  if (!titleEl) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id") || "rtx-4070-super";
  const product = PRODUCTS[productId] || PRODUCTS["rtx-4070-super"];

  document.title = `${product.title} — Горбушка Тех`;

  const breadcrumbEl = document.getElementById("product-breadcrumb");
  const badgeEl = document.getElementById("product-badge");
  const imgEl = document.getElementById("product-image");
  const skuEl = document.getElementById("product-sku");
  const ratingEl = document.getElementById("product-rating");
  const priceEl = document.getElementById("product-price");
  const oldPriceEl = document.getElementById("product-old-price");
  const discountEl = document.getElementById("product-discount");
  const descEl = document.getElementById("product-description");
  const advEl = document.getElementById("product-advantages");
  const specsBody = document.getElementById("product-specs-tbody");
  const orderBtn = document.getElementById("product-order-button");

  if (breadcrumbEl) breadcrumbEl.textContent = product.title;
  titleEl.textContent = product.title;
  if (skuEl) skuEl.textContent = `Артикул: ${product.sku}`;

  if (badgeEl) {
    if (product.badge) {
      badgeEl.hidden = false;
      badgeEl.textContent = product.badge;
      badgeEl.style.backgroundColor =
        product.badgeType === "discount"
          ? "var(--color-danger)"
          : product.badgeType === "new"
            ? "var(--color-success)"
            : "var(--color-primary)";
    } else {
      badgeEl.hidden = true;
    }
  }

  if (imgEl) {
    imgEl.src = product.image;
    imgEl.alt = product.alt;
  }

  if (ratingEl) {
    ratingEl.innerHTML = `<span aria-hidden="true">★</span> ${product.rating} (${product.reviewsCount} отзывов)`;
  }

  if (priceEl) priceEl.textContent = formatPrice(product.price);

  if (oldPriceEl && discountEl) {
    if (product.oldPrice && product.discountPercent) {
      oldPriceEl.hidden = false;
      oldPriceEl.textContent = formatPrice(product.oldPrice);
      discountEl.hidden = false;
      discountEl.textContent = `-${product.discountPercent}%`;
    } else {
      oldPriceEl.hidden = true;
      discountEl.hidden = true;
    }
  }

  if (descEl) descEl.textContent = product.description;

  if (advEl) {
    advEl.innerHTML = "";
    product.advantages.forEach((text) => {
      const li = document.createElement("li");
      li.textContent = `✓ ${text}`;
      advEl.appendChild(li);
    });
  }

  if (specsBody) {
    specsBody.innerHTML = "";
    product.specs.forEach(([key, val]) => {
      const tr = document.createElement("tr");
      const th = document.createElement("th");
      th.scope = "row";
      th.textContent = key;
      const td = document.createElement("td");
      td.textContent = val;
      tr.append(th, td);
      specsBody.appendChild(tr);
    });
  }

  if (orderBtn) {
    orderBtn.setAttribute("data-product", product.title);
  }
}

/* ===============================
   4. Фильтрация каталога (catalog.html)
   =============================== */
function initCatalogFilters() {
  const form = document.getElementById("filters-form");
  const grid = document.getElementById("catalog-products-grid");
  if (!form || !grid) return;

  const cards = Array.from(grid.querySelectorAll(".product-card"));
  const infoEl = document.getElementById("catalog-results-info");
  const emptyEl = document.getElementById("catalog-empty");
  const priceFromInput = document.getElementById("price-from");
  const priceToInput = document.getElementById("price-to");

  // Применяем ?cat=... из URL (например, ссылки из футера)
  const params = new URLSearchParams(window.location.search);
  const urlCat = params.get("cat");
  if (urlCat) {
    const targetCheckbox = form.querySelector(
      `input[name="cat"][value="${CSS.escape(urlCat)}"]`
    );
    if (targetCheckbox) {
      targetCheckbox.checked = true;
    }
  }

  const applyFilters = () => {
    const selectedCats = Array.from(
      form.querySelectorAll('input[name="cat"]:checked')
    ).map((el) => el.value);

    const selectedBadges = Array.from(
      form.querySelectorAll('input[name="badge"]:checked')
    ).map((el) => el.value);

    const minPrice = priceFromInput.value ? Number(priceFromInput.value) : 0;
    const maxPrice = priceToInput.value
      ? Number(priceToInput.value)
      : Infinity;

    let visibleCount = 0;

    cards.forEach((card) => {
      const cardCat = card.dataset.category || "";
      const cardBadge = card.dataset.badge || "";
      const cardPrice = Number(card.dataset.price || 0);

      const matchesCat =
        selectedCats.length === 0 || selectedCats.includes(cardCat);
      const matchesBadge =
        selectedBadges.length === 0 || selectedBadges.includes(cardBadge);
      const matchesPrice = cardPrice >= minPrice && cardPrice <= maxPrice;

      const isVisible = matchesCat && matchesBadge && matchesPrice;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    if (infoEl) {
      infoEl.textContent = `Найдено товаров: ${visibleCount} из ${cards.length}`;
    }
    if (emptyEl) {
      emptyEl.hidden = visibleCount > 0;
    }
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    applyFilters();
  });

  form.addEventListener("change", applyFilters);

  form.addEventListener("reset", () => {
    setTimeout(applyFilters, 0);
  });

  applyFilters();
}

/* ===============================
   5. Модальное окно и валидация формы заявки
   =============================== */
function initOrderDialogAndForm() {
  const dialog = document.getElementById("order-dialog");
  const form = document.getElementById("order-form");
  const closeBtn = document.getElementById("close-order-dialog");
  const selectedProductInput = document.getElementById("selected-product");
  const dialogProductBox = document.getElementById("order-dialog-product");
  const dialogProductName = document.getElementById(
    "order-dialog-product-name"
  );
  const successMessage = document.getElementById("success-message");

  let lastFocusedTrigger = null;

  // Открытие модалки при клике на любую кнопку «Заказать»
  if (dialog) {
    document.addEventListener("click", (event) => {
      const button = event.target.closest(".product-card__button[data-product]");
      if (!button) return;

      lastFocusedTrigger = button;
      const productName = button.getAttribute("data-product") || "";

      if (selectedProductInput) selectedProductInput.value = productName;
      if (dialogProductBox && dialogProductName) {
        if (productName) {
          dialogProductName.textContent = productName;
          dialogProductBox.hidden = false;
        } else {
          dialogProductBox.hidden = true;
        }
      }

      if (successMessage) successMessage.hidden = true;
      dialog.showModal();
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        dialog.close();
      });
    }

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    });

    dialog.addEventListener("close", () => {
      if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === "function") {
        lastFocusedTrigger.focus();
      }
    });
  }

  if (!form) return;

  // Маска телефона +7 (XXX) XXX-XX-XX
  const phoneInput = form.querySelector("#order-phone");
  if (phoneInput) {
    phoneInput.addEventListener("input", () => {
      let digits = phoneInput.value.replace(/\D/g, "");
      if (digits.startsWith("8")) digits = "7" + digits.slice(1);
      if (!digits.startsWith("7") && digits.length > 0) {
        digits = "7" + digits;
      }
      digits = digits.slice(0, 11);

      let formatted = "";
      if (digits.length > 0) formatted = "+7";
      if (digits.length > 1) formatted += " (" + digits.slice(1, 4);
      if (digits.length >= 4) formatted += ")";
      if (digits.length > 4) formatted += " " + digits.slice(4, 7);
      if (digits.length > 7) formatted += "-" + digits.slice(7, 9);
      if (digits.length > 9) formatted += "-" + digits.slice(9, 11);

      phoneInput.value = formatted;
    });
  }

  // Предзаполнение товара на order.html из ?product=...
  const orderProductSelect = form.querySelector("#order-product");
  if (orderProductSelect) {
    const productFromUrl = new URLSearchParams(window.location.search).get(
      "product"
    );
    if (productFromUrl) {
      orderProductSelect.value = productFromUrl;
    }
  }

  const setFieldError = (field, message) => {
    const errorId = `${field.id}-error`;
    let errorEl = document.getElementById(errorId);

    if (message) {
      field.setAttribute("aria-invalid", "true");
      if (!errorEl) {
        errorEl = document.createElement("span");
        errorEl.id = errorId;
        errorEl.className = "order-form__error";
        const wrapper = field.closest(".order-form__field, .form-field");
        if (wrapper) wrapper.appendChild(errorEl);
      }
      errorEl.textContent = message;

      const describedBy = (field.getAttribute("aria-describedby") || "")
        .split(/\s+/)
        .filter(Boolean);
      if (!describedBy.includes(errorId)) {
        describedBy.push(errorId);
        field.setAttribute("aria-describedby", describedBy.join(" "));
      }
    } else {
      field.removeAttribute("aria-invalid");
      if (errorEl) errorEl.remove();

      const describedBy = (field.getAttribute("aria-describedby") || "")
        .split(/\s+/)
        .filter((id) => id && id !== errorId);
      if (describedBy.length > 0) {
        field.setAttribute("aria-describedby", describedBy.join(" "));
      } else {
        field.removeAttribute("aria-describedby");
      }
    }
  };

  const validateField = (field) => {
    const value = field.value.trim();

    if (field.type === "checkbox") {
      if (field.required && !field.checked) {
        setFieldError(field, "Подтвердите согласие на обработку данных.");
        return false;
      }
      setFieldError(field, "");
      return true;
    }

    if (field.required && !value) {
      setFieldError(field, "Заполните это обязательное поле.");
      return false;
    }

    if (field.type === "email" && value) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        setFieldError(field, "Введите корректный e-mail, например name@mail.ru.");
        return false;
      }
    }

    if (field.id === "order-phone" && value) {
      const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
      if (!phonePattern.test(value)) {
        setFieldError(
          field,
          "Укажите телефон в формате +7 (900) 000-00-00."
        );
        return false;
      }
    }

    setFieldError(field, "");
    return true;
  };

  const fieldsToValidate = form.querySelectorAll(
    "input[required], select[required], input[type='email'], input[type='tel']"
  );

  fieldsToValidate.forEach((field) => {
    const eventName =
      field.type === "checkbox" || field.tagName === "SELECT"
        ? "change"
        : "input";
    field.addEventListener(eventName, () => {
      if (field.getAttribute("aria-invalid") === "true") {
        validateField(field);
      }
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let firstInvalid = null;
    fieldsToValidate.forEach((field) => {
      const isValid = validateField(field);
      if (!isValid && !firstInvalid) {
        firstInvalid = field;
      }
    });

    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    const orderedItem =
      (selectedProductInput && selectedProductInput.value) ||
      (orderProductSelect &&
        orderProductSelect.value &&
        orderProductSelect.options[orderProductSelect.selectedIndex].text) ||
      "";

    if (successMessage) {
      successMessage.textContent = orderedItem
        ? `Заявка на «${orderedItem}» успешно отправлена! Менеджер павильона B2-114 свяжется с вами в течение 15 минут.`
        : "Заявка успешно отправлена! Менеджер свяжется с вами в ближайшее время.";
      successMessage.hidden = false;
    }

    form.reset();
    if (selectedProductInput) selectedProductInput.value = "";
    if (dialog && dialog.open) {
      dialog.close();
    }
  });
}

// ==========================================
// Анимация цифр (счетчик) для страницы about.html
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const statNumbers = document.querySelectorAll('.stat-card__number');
  
  if (!statNumbers.length) return; // Если на странице нет блока статистики, выходим

  // Функция для форматирования чисел (добавляет пробелы для тысяч)
  const formatNumber = (num, decimals) => {
    let str = num.toFixed(decimals);
    let parts = str.split('.');
    // Добавляем пробел каждые 3 цифры в целой части
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return parts.join('.');
  };

  // Функция анимации конкретного элемента
  const animateValue = (el) => {
    const target = parseFloat(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    const decimals = parseInt(el.getAttribute('data-decimals')) || 0;
    const duration = 2000; // Длительность анимации 2 секунды
    const startTime = performance.now();

    const updateNumber = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Функция плавности (easeOutQuad) - замедляется к концу
      const easeOutProgress = 1 - (1 - progress) * (1 - progress);
      const currentNumber = target * easeOutProgress;

      el.textContent = formatNumber(currentNumber, decimals) + suffix;

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      } else {
        // Гарантируем точное конечное значение
        el.textContent = formatNumber(target, decimals) + suffix; 
      }
    };

    requestAnimationFrame(updateNumber);
  };

  // Наблюдатель за появлением блока в зоне видимости
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateValue(entry.target);
        obs.unobserve(entry.target); // Анимируем только один раз
      }
    });
  }, { threshold: 0.5 }); // Срабатывает, когда 50% карточки показалось на экране

  statNumbers.forEach(num => observer.observe(num));
});