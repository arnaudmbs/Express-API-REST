import { Product } from './product';

export class ProductList {
  private products: Product[] = [
    new Product('1', 'MacBook Pro 16"', 'Ordinateur portable Apple M3 Pro, 18 Go RAM, 512 Go SSD', 2799.99, 'informatique', 25),
    new Product('2', 'iPhone 15 Pro', 'Smartphone Apple 256 Go, titane naturel', 1229.00, 'smartphone', 80),
    new Product('3', 'Samsung Galaxy S24 Ultra', 'Smartphone Samsung 256 Go, titane violet', 1469.00, 'smartphone', 55),
    new Product('4', 'Sony WH-1000XM5', 'Casque audio sans fil à réduction de bruit', 349.99, 'audio', 120),
    new Product('5', 'Dell UltraSharp U2723QE', 'Moniteur 4K 27 pouces IPS USB-C', 579.00, 'informatique', 40),
    new Product('6', 'Logitech MX Master 3S', 'Souris sans fil ergonomique', 99.99, 'accessoire', 200),
    new Product('7', 'Clavier Keychron K8 Pro', 'Clavier mécanique TKL sans fil, switches Gateron Brown', 109.00, 'accessoire', 75),
    new Product('8', 'iPad Air M2', 'Tablette Apple 11 pouces, 128 Go, bleu', 699.00, 'tablette', 60),
    new Product('9', 'AirPods Pro 2', 'Écouteurs sans fil Apple avec réduction de bruit', 279.00, 'audio', 150),
    new Product('10', 'Samsung T7 Shield 2 To', 'Disque SSD externe USB-C, résistant aux chocs', 149.99, 'stockage', 90),
    new Product('11', 'LG OLED C3 55"', 'Téléviseur OLED 4K 55 pouces, HDR Dolby Vision', 1299.00, 'tv', 20),
    new Product('12', 'Nintendo Switch OLED', 'Console de jeu portable, écran OLED 7 pouces', 349.99, 'gaming', 45),
    new Product('13', 'PlayStation 5', 'Console de jeu Sony, lecteur Blu-ray, 825 Go SSD', 549.99, 'gaming', 30),
    new Product('14', 'Xbox Series X', 'Console de jeu Microsoft, 1 To SSD', 499.99, 'gaming', 35),
    new Product('15', 'Canon EOS R6 Mark II', 'Appareil photo hybride plein format 24,2 MP', 2599.00, 'photo', 15),
    new Product('16', 'GoPro Hero 12 Black', 'Caméra d\'action 5,3K étanche', 399.99, 'photo', 70),
    new Product('17', 'DJI Mini 4 Pro', 'Drone compact avec caméra 4K HDR', 959.00, 'photo', 25),
    new Product('18', 'Bose SoundLink Flex', 'Enceinte Bluetooth portable étanche IP67', 149.99, 'audio', 110),
    new Product('19', 'Razer DeathAdder V3', 'Souris gaming filaire ultra-légère 59g', 89.99, 'gaming', 85),
    new Product('20', 'Corsair Vengeance DDR5 32 Go', 'Kit mémoire RAM DDR5 5600 MHz (2x16 Go)', 109.99, 'composant', 60),
    new Product('21', 'WD Black SN850X 1 To', 'SSD NVMe PCIe Gen4 interne', 89.99, 'stockage', 130),
    new Product('22', 'NVIDIA RTX 4070', 'Carte graphique 12 Go GDDR6X', 599.00, 'composant', 20),
    new Product('23', 'AMD Ryzen 7 7800X3D', 'Processeur gaming 8 cœurs AM5', 449.00, 'composant', 35),
    new Product('24', 'Sonos Era 300', 'Enceinte Wi-Fi audio spatial Dolby Atmos', 449.00, 'audio', 40),
    new Product('25', 'Apple Watch Ultra 2', 'Montre connectée 49 mm, GPS + Cellular', 899.00, 'wearable', 50),
    new Product('26', 'Garmin Fenix 7X Solar', 'Montre GPS multisport solaire', 799.99, 'wearable', 30),
    new Product('27', 'Kindle Paperwhite Signature', 'Liseuse 6,8 pouces 32 Go, éclairage chaud', 189.99, 'tablette', 95),
    new Product('28', 'Philips Hue Starter Kit E27', 'Kit 3 ampoules connectées + pont Hue', 129.99, 'maison', 140),
    new Product('29', 'iRobot Roomba j7+', 'Aspirateur robot avec vidage automatique', 599.00, 'maison', 25),
    new Product('30', 'Dyson V15 Detect', 'Aspirateur balai sans fil avec laser', 749.00, 'maison', 30),
    new Product('31', 'Nespresso Vertuo Next', 'Machine à café capsules Vertuo', 149.00, 'maison', 65),
    new Product('32', 'ThinkPad X1 Carbon Gen 11', 'Ordinateur portable Lenovo 14", i7, 16 Go RAM', 1899.00, 'informatique', 20),
    new Product('33', 'ASUS ROG Strix G16', 'PC portable gaming 16", RTX 4060, i7-13650HX', 1599.00, 'gaming', 18),
    new Product('34', 'Samsung Galaxy Tab S9', 'Tablette Android 11", Snapdragon 8 Gen 2', 899.00, 'tablette', 35),
    new Product('35', 'Marshall Stanmore III', 'Enceinte Bluetooth vintage 80W', 379.00, 'audio', 45),
    new Product('36', 'Logitech C920 HD Pro', 'Webcam Full HD 1080p, autofocus', 79.99, 'accessoire', 160),
    new Product('37', 'Elgato Stream Deck MK.2', 'Contrôleur de streaming 15 touches LCD', 149.99, 'accessoire', 55),
    new Product('38', 'Synology DS224+', 'Serveur NAS 2 baies pour particulier', 329.00, 'stockage', 30),
    new Product('39', 'TP-Link Deco XE75', 'Système Mesh Wi-Fi 6E tri-bande (lot de 3)', 349.99, 'réseau', 40),
    new Product('40', 'Ubiquiti UniFi U6 Pro', 'Point d\'accès Wi-Fi 6 professionnel', 159.00, 'réseau', 50),
    new Product('41', 'Raspberry Pi 5 8 Go', 'Micro-ordinateur ARM, 8 Go RAM', 89.99, 'composant', 100),
    new Product('42', 'Arduino Uno R4 WiFi', 'Carte de développement IoT', 29.99, 'composant', 180),
    new Product('43', 'Anker PowerCore 26800 mAh', 'Batterie externe USB-C Power Delivery', 59.99, 'accessoire', 200),
    new Product('44', 'CalDigit TS4', 'Station d\'accueil Thunderbolt 4, 18 ports', 399.00, 'accessoire', 25),
    new Product('45', 'BenQ ScreenBar Halo', 'Lampe de moniteur avec rétroéclairage', 179.00, 'accessoire', 70),
    new Product('46', 'Secretlab Titan Evo 2022', 'Chaise de bureau gaming ergonomique', 499.00, 'mobilier', 15),
    new Product('47', 'IKEA BEKANT Motorisé', 'Bureau assis-debout électrique 160x80 cm', 549.00, 'mobilier', 20),
    new Product('48', 'Herman Miller Aeron', 'Chaise de bureau ergonomique taille B', 1499.00, 'mobilier', 10),
    new Product('49', 'Rode NT-USB Mini', 'Microphone USB cardioïde pour podcast', 99.00, 'audio', 80),
    new Product('50', 'Blue Yeti X', 'Microphone USB condensateur professionnel', 169.99, 'audio', 65),
    new Product('51', 'Elgato Key Light Air', 'Panneau LED Wi-Fi pour streaming', 129.99, 'accessoire', 55),
    new Product('52', 'Samsung 990 Pro 2 To', 'SSD NVMe PCIe Gen4 avec dissipateur', 179.99, 'stockage', 70),
    new Product('53', 'Seagate IronWolf 8 To', 'Disque dur NAS 3,5" 7200 RPM', 199.99, 'stockage', 45),
    new Product('54', 'LG UltraGear 27GR95QE', 'Moniteur gaming OLED 27" QHD 240 Hz', 899.00, 'informatique', 15),
    new Product('55', 'ASUS ProArt PA279CRV', 'Moniteur 4K 27" calibré pour créatifs', 549.00, 'informatique', 20),
    new Product('56', 'Google Pixel 8 Pro', 'Smartphone Google 256 Go, AI intégrée', 1099.00, 'smartphone', 40),
    new Product('57', 'OnePlus 12', 'Smartphone 16 Go RAM, Snapdragon 8 Gen 3', 919.00, 'smartphone', 35),
    new Product('58', 'Nothing Phone (2)', 'Smartphone 256 Go, interface Glyph', 649.00, 'smartphone', 50),
    new Product('59', 'Xiaomi 14 Ultra', 'Smartphone photo Leica, capteur 1 pouce', 1499.00, 'smartphone', 20),
    new Product('60', 'Fitbit Charge 6', 'Bracelet connecté fitness avec GPS', 159.99, 'wearable', 90),
    new Product('61', 'Samsung Galaxy Watch 6', 'Montre connectée Wear OS, 44 mm', 319.00, 'wearable', 55),
    new Product('62', 'Oculus Meta Quest 3', 'Casque VR autonome 128 Go', 549.99, 'gaming', 30),
    new Product('63', 'Steam Deck OLED 1 To', 'Console PC portable Valve, écran OLED', 679.00, 'gaming', 20),
    new Product('64', 'Razer BlackWidow V4 Pro', 'Clavier gaming mécanique RGB', 229.99, 'gaming', 40),
    new Product('65', 'SteelSeries Arctis Nova Pro', 'Casque gaming sans fil avec DAC', 349.99, 'gaming', 35),
    new Product('66', 'Canon RF 50mm f/1.8 STM', 'Objectif portrait monture RF', 229.00, 'photo', 40),
    new Product('67', 'Sony Alpha 7 IV', 'Appareil photo hybride plein format 33 MP', 2499.00, 'photo', 10),
    new Product('68', 'Fujifilm X100VI', 'Appareil photo compact premium 40 MP', 1699.00, 'photo', 8),
    new Product('69', 'DJI Osmo Pocket 3', 'Caméra stabilisée de poche 4K', 519.00, 'photo', 35),
    new Product('70', 'Manfrotto Befree Advanced', 'Trépied voyage aluminium avec rotule', 179.99, 'photo', 50),
    new Product('71', 'Ring Video Doorbell 4', 'Sonnette vidéo connectée Wi-Fi', 199.99, 'maison', 80),
    new Product('72', 'Google Nest Hub 2', 'Écran connecté 7 pouces avec assistant', 99.99, 'maison', 100),
    new Product('73', 'Amazon Echo Dot 5', 'Enceinte connectée Alexa compacte', 59.99, 'maison', 200),
    new Product('74', 'Netatmo Station Météo', 'Station météo connectée intérieur/extérieur', 169.99, 'maison', 55),
    new Product('75', 'Tado Thermostat V3+', 'Thermostat intelligent avec géolocalisation', 219.99, 'maison', 35),
    new Product('76', 'SanDisk Extreme Pro 256 Go', 'Carte microSD UHS-I U3 200 Mo/s', 39.99, 'stockage', 250),
    new Product('77', 'Crucial P5 Plus 1 To', 'SSD NVMe PCIe Gen4 interne', 79.99, 'stockage', 85),
    new Product('78', 'QNAP TS-464', 'Serveur NAS 4 baies Intel Celeron', 549.00, 'stockage', 15),
    new Product('79', 'APC Back-UPS 1500VA', 'Onduleur 900W avec protection parafoudre', 199.99, 'composant', 30),
    new Product('80', 'Corsair RM850x', 'Alimentation PC modulaire 850W 80+ Gold', 139.99, 'composant', 50),
    new Product('81', 'Noctua NH-D15', 'Ventirad CPU double tour silencieux', 109.99, 'composant', 40),
    new Product('82', 'be quiet! Dark Base 701', 'Boîtier PC moyen tour avec insonorisation', 199.99, 'composant', 25),
    new Product('83', 'ASUS ROG Strix B650E-F', 'Carte mère AM5 DDR5 ATX', 289.99, 'composant', 20),
    new Product('84', 'Netgear Nighthawk AX12', 'Routeur Wi-Fi 6 tri-bande AX11000', 449.99, 'réseau', 18),
    new Product('85', 'Unifi Dream Machine Pro', 'Passerelle réseau tout-en-un pour entreprise', 379.00, 'réseau', 12),
    new Product('86', 'Cable Matters USB-C vers HDMI 2.1', 'Câble 2 mètres 8K@60Hz', 19.99, 'accessoire', 300),
    new Product('87', 'Twelve South BookArc', 'Support vertical pour MacBook en aluminium', 59.99, 'accessoire', 80),
    new Product('88', 'Lamicall Support Tablette', 'Support de bureau ajustable pour tablette', 24.99, 'accessoire', 150),
    new Product('89', 'Peak Design Everyday Backpack 30L', 'Sac à dos photo/tech modulaire', 289.95, 'accessoire', 25),
    new Product('90', 'Xerox B230 Laser Mono', 'Imprimante laser monochrome Wi-Fi recto-verso', 179.00, 'informatique', 30),
    new Product('91', 'Epson EcoTank ET-2850', 'Imprimante jet d\'encre multifonction sans cartouche', 249.99, 'informatique', 35),
    new Product('92', 'Wacom Intuos Pro M', 'Tablette graphique professionnelle Bluetooth', 349.99, 'informatique', 20),
    new Product('93', 'Jabra Evolve2 75', 'Casque professionnel UC sans fil ANC', 299.99, 'audio', 45),
    new Product('94', 'Shure MV7+', 'Microphone dynamique USB/XLR pour podcast', 269.00, 'audio', 30),
    new Product('95', 'Focal Bathys', 'Casque audiophile Bluetooth avec DAC intégré', 699.00, 'audio', 15),
    new Product('96', 'JBL Charge 5', 'Enceinte Bluetooth portable 30W étanche', 179.99, 'audio', 95),
    new Product('97', 'Samsung Galaxy Buds3 Pro', 'Écouteurs sans fil ANC, son 360 Audio', 249.00, 'audio', 70),
    new Product('98', 'Belkin MagSafe 3-en-1', 'Station de charge sans fil iPhone/Watch/AirPods', 139.99, 'accessoire', 60),
    new Product('99', 'Anker 737 GaNPrime 120W', 'Chargeur mural USB-C triple port', 79.99, 'accessoire', 120),
    new Product('100', 'Thunderbolt 4 Cable 0.8m', 'Câble Thunderbolt 4 Apple certifié', 69.00, 'accessoire', 180),
  ];

  // READ : Récupérer tous les produits
  getAllProducts(): Product[] {
    return [...this.products];
  }

  // READ : Récupérer un produit par ID
  getProductById(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  // READ : Récupérer un produit par nom
  getProductByName(name: string): Product | undefined {
    return this.products.find(product => product.name === name);
  }

  // CREATE : Ajouter un nouveau produit
  addProduct(product: Product): boolean {
    if (this.getProductByName(product.name)) {
      console.error('Produit avec ce nom existe déjà');
      return false;
    }
    const newId = new Date().getTime().toString();
    product.id = newId;
    this.products.push(product);
    return true;
  }

  // UPDATE : Modifier un produit existant
  updateProduct(id: string, updatedProduct: Product): boolean {
    const index = this.products.findIndex(product => product.id === id);
    if (index === -1) {
      console.error('Produit non trouvé');
      return false;
    }
    updatedProduct.id = id;
    this.products[index] = updatedProduct;
    return true;
  }

  // DELETE : Supprimer un produit par ID
  deleteProduct(id: string): boolean {
    const index = this.products.findIndex(product => product.id === id);
    if (index === -1) {
      console.error('Produit non trouvé');
      return false;
    }
    this.products.splice(index, 1);
    return true;
  }

  // DELETE : Supprimer un produit par nom
  deleteProductByName(name: string): boolean {
    const index = this.products.findIndex(product => product.name === name);
    if (index === -1) {
      console.error('Produit non trouvé');
      return false;
    }
    this.products.splice(index, 1);
    return true;
  }

  // Récupérer le nombre total de produits
  getTotalProducts(): number {
    return this.products.length;
  }

  // Vérifier si un produit existe par nom
  productExists(name: string): boolean {
    return this.products.some(product => product.name === name);
  }

  // Filtrer les produits par catégorie
  getProductsByCategory(category: string): Product[] {
    return this.products.filter(product => product.category === category);
  }

  // Récupérer la liste des catégories distinctes
  getCategories(): string[] {
    return [...new Set(this.products.map(product => product.category))];
  }
}

// Instance statique (singleton) pour utilisation globale
export const productListManager = new ProductList();
