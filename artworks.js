const stretchArtworkManifest = [
  {
    title: "60/50",
    description: "Finished artwork asset",
    imagePath: "./artworks/60-50.png",
    fallbackPaths: [],
    alt: "Stretch artwork for 60/50",
    focusX: "50%",
    focusY: "50%",
  },
  {
    title: "More Tea Vicar?",
    description: "Finished artwork asset",
    imagePath: "./artworks/more-tea-vicar.png",
    fallbackPaths: ["./artworks/more-tea-vicar.png.png"],
    alt: "Stretch artwork for More Tea Vicar?",
    focusX: "50%",
    focusY: "50%",
  },
  {
    title: "Hello Blossom",
    description: "Finished artwork asset",
    imagePath: "./artworks/hello-blossom.png",
    fallbackPaths: [],
    alt: "Stretch artwork for Hello Blossom",
    focusX: "50%",
    focusY: "50%",
  },
  {
    title: "True Bullshit",
    description: "Finished artwork asset",
    imagePath: "./artworks/true-bullshit.png",
    fallbackPaths: [],
    alt: "Stretch artwork for True Bullshit",
    focusX: "50%",
    focusY: "50%",
  },
  {
    title: "Excuse Me I Normally Fart",
    description: "Finished artwork asset",
    imagePath: "./artworks/excuse-me-i-normally-fart.png",
    fallbackPaths: [],
    alt: "Stretch artwork for Excuse Me I Normally Fart",
    focusX: "50%",
    focusY: "50%",
  },
  {
    title: "Dead Horse",
    description: "Finished artwork asset",
    imagePath: "./artworks/dead-horse.png",
    fallbackPaths: ["./artworks/dead-horse.png.png"],
    alt: "Stretch artwork for dead horse",
    focusX: "50%",
    focusY: "50%",
  },
  {
    title: "Horse",
    description: "Finished artwork asset",
    imagePath: "./artworks/horse.png",
    fallbackPaths: [],
    alt: "Stretch artwork for horse",
    focusX: "50%",
    focusY: "50%",
  },
  {
    title: "Lizard",
    description: "Finished artwork asset",
    imagePath: "./artworks/lizard.png",
    fallbackPaths: [],
    alt: "Stretch artwork for lizard",
    focusX: "50%",
    focusY: "50%",
  },
  {
    title: "Picture Of A Ten-Dollar Note",
    description: "Finished artwork asset",
    imagePath: "./artworks/ten-dollar-note.png",
    fallbackPaths: [],
    alt: "Stretch artwork for a picture of a ten-dollar note",
    focusX: "50%",
    focusY: "18%",
  },
];

const artworkGallery = document.querySelector("#artworkGallery");
const artworkLightbox = document.querySelector("#artworkLightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxClose = document.querySelector("#lightboxClose");

renderArtworkGallery();
setupLightbox();

function renderArtworkGallery() {
  if (!artworkGallery) {
    return;
  }

  artworkGallery.innerHTML = "";

  for (const artwork of stretchArtworkManifest) {
    artworkGallery.append(buildArtworkCard(artwork));
  }
}

function buildArtworkCard(artwork) {
  const card = document.createElement("article");
  card.className = "artwork-card";

  card.innerHTML = `
    <button class="artwork-frame" type="button" aria-label="Expand ${escapeHtml(artwork.title)}">
      <img src="${artwork.imagePath}" alt="${artwork.alt}" loading="lazy" decoding="async">
    </button>
  `;

  const image = card.querySelector("img");
  const trigger = card.querySelector(".artwork-frame");
  image.style.setProperty("--art-focus-x", artwork.focusX || "50%");
  image.style.setProperty("--art-focus-y", artwork.focusY || "50%");
  trigger.addEventListener("click", () => {
    openLightbox(artwork, image.currentSrc || image.src);
  });
  image.addEventListener("error", () => {
    const fallbackPath = artwork.fallbackPaths?.shift();
    if (fallbackPath) {
      image.src = fallbackPath;
      return;
    }

    card.replaceWith(buildMissingCard(artwork));
  }, { once: true });

  return card;
}

function buildMissingCard(artwork) {
  const card = document.createElement("article");
  card.className = "empty-card";
  card.innerHTML = `
    <h2>${escapeHtml(artwork.title)}</h2>
    <p>Missing image file at <code>${escapeHtml(artwork.imagePath)}</code>.</p>
  `;
  return card;
}

function setupLightbox() {
  if (!artworkLightbox || !lightboxImage || !lightboxClose) {
    return;
  }

  lightboxClose.addEventListener("click", closeLightbox);
  artworkLightbox.addEventListener("click", (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.closeLightbox === "true") {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && artworkLightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}

function openLightbox(artwork, source) {
  if (!artworkLightbox || !lightboxImage || !lightboxClose) {
    return;
  }

  lightboxImage.src = source;
  lightboxImage.alt = artwork.alt;
  artworkLightbox.classList.add("is-open");
  artworkLightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lightboxClose.focus();
}

function closeLightbox() {
  if (!artworkLightbox || !lightboxImage) {
    return;
  }

  artworkLightbox.classList.remove("is-open");
  artworkLightbox.setAttribute("aria-hidden", "true");
  lightboxImage.removeAttribute("src");
  lightboxImage.alt = "";
  document.body.style.overflow = "";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
