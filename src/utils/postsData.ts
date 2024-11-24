import samsungGalaxyS23 from "../../public/assets/samsung-galaxy-s23.jpeg";
import iphone15Pro from "../../public/assets/iphone-15-pro.jpg";
import googlePixel7Pro from "../../public/assets/google-pixel7-pro.jpg";

export function postsData() {
  const posts = [
    {
      id: 1,
      title: "Samsung Galaxy S23 Ultra",
      content: `
        The Samsung Galaxy S23 Ultra features a stunning display and is powered by the Snapdragon 8 Gen 2 processor. 
        The device showcases a quad-camera system with a 200MP main sensor and is available in various finishes.
      `,
      imageUrl: samsungGalaxyS23,
      specs: {
        processor: "Snapdragon 8 Gen 2",
        display: "6.8-inch Dynamic AMOLED 2X",
        ram: "8GB / 12GB",
        storageOptions: ["256GB", "512GB", "1TB"],
        camera: "200MP Quad-Camera System",
        battery: "5000mAh",
        os: "Android 13",
      },
      reviews: [
        {
          user: "TechGuru",
          rating: 5,
          comment: "Best Samsung device yet with an incredible camera.",
        },
        {
          user: "AndroidFan",
          rating: 4,
          comment: "Love the performance, but the price is high.",
        },
      ],
    },
    {
      id: 2,
      title: "Apple iPhone 15 Pro",
      content: `
        The Apple iPhone 15 Pro features a stunning 6.1-inch Super Retina XDR display 
        and is powered by the A17 Pro chip. The device showcases a triple-camera 
        system with improved low-light performance and ProRAW capabilities. 
        It is available in various finishes, including Space Black, Silver, Gold, 
        and Deep Purple.
      `,
      imageUrl: iphone15Pro,
      specs: {
        processor: "A17 Pro",
        display: "6.1-inch Super Retina XDR",
        ram: "8GB",
        storageOptions: ["128GB", "256GB", "512GB", "1TB"],
        camera: "48MP Triple-Camera System",
        battery: "3200mAh",
        os: "iOS 17",
      },
      reviews: [
        {
          user: "TechGuru",
          rating: 5,
          comment: "Best iPhone yet, the camera is a game-changer.",
        },
        {
          user: "AppleFan",
          rating: 4,
          comment: "Love the design, but would prefer a larger battery.",
        },
      ],
    },
    {
      id: 3,
      title: "Google Pixel 7 Pro",
      content: `
        The Google Pixel 7 Pro offers a 6.7-inch LTPO OLED display with a 120Hz refresh rate. 
        Powered by Google’s Tensor G2 chip, it excels in AI-driven photography. 
        The device includes a 50MP main camera and supports 5G connectivity.
      `,
      imageUrl: googlePixel7Pro,
      specs: {
        processor: "Tensor G2",
        display: "6.7-inch LTPO OLED",
        ram: "12GB",
        storageOptions: ["128GB", "256GB", "512GB"],
        camera: "50MP Triple-Camera System",
        battery: "5000mAh",
        os: "Android 13",
      },
      reviews: [
        {
          user: "PhotoLover",
          rating: 5,
          comment: "The best camera on a smartphone!",
        },
        {
          user: "DailyUser",
          rating: 4,
          comment: "Great phone, but sometimes slow with updates.",
        },
      ],
    },
  ];

  return posts;
}
