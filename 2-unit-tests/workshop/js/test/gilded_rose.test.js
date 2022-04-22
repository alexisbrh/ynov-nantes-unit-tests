const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("Tous les éléments ont une valeur sellIn qui désigne le nombre de jours restant pour vendre l'article.", function() {
    const gildedRose = new Item("foo", 0, 0);
    expect(gildedRose.sellIn).toBeDefined();
  });
  it("Tous les éléments ont une valeur quality qui désigne le nombre de jours restant pour vendre l'article.", function() {
    const gildedRose = new Item("foo", 0, 0);
    expect(gildedRose.quality).toBeDefined();
  });
  it("À la fin de chaque journée, notre système diminue ces deux valeurs pour chaque produit.", function() {
    const gildedRose = new Shop([new Item("Epée", 10, 47)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(46);
  });

  it("Une fois que la date de péremption est passée, la qualité se dégrade deux fois plus rapidement.", function() {
    const gildedRose = new Shop([new Item("Epée", -1, 47)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(45);
  });
  it("La qualité (quality) d'un produit ne peut jamais être négative.", function() {
    const gildedRose = new Shop([new Item("Epée", 10, -1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBeUndefined(undefined);
  });
  it("'Aged Brie' augmente sa qualité (quality) plus le temps passe.", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 40)]);
    const items = gildedRose.updateQuality();
    for (let day = items[0].sellIn; day > 0; day--) {
      const item = gildedRose.updateQuality();
      expect(item[0].quality).toBeGreaterThanOrEqual(items[0].quality);
      // console.log(item[0].quality);
    }
  });
  // it("La qualité d'un produit n'est jamais de plus de 50.", function() {
  //   const gildedRose = new Shop([ new Item("Graal", 10, 20)]);
  //   const items = gildedRose.updateQuality();
  // });
  it("'Sulfuras', étant un objet légendaire, n'a pas de date de péremption et ne perd jamais en qualité (quality)", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });
  it("'Backstage passes', comme le 'Aged Brie', augmente sa qualité (quality) plus le temps passe (sellIn) ; La qualité augmente de 2 quand il reste 10 jours ou moins et de 3 quand il reste 5 jours ou moins, mais la qualité tombe à 0 après le concert.", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 40)]);
    const items = gildedRose.updateQuality();
    const nb = 40; // items[0].quality
    if (items[0].sellIn <= 10){
      for (const item of items) {
        const delta = item.quality - nb;
        expect(delta).toBe(2);
      }
    } else if (items[0].sellIn <= 5){
      for (const item of items) {
        const delta = item.quality - nb;
        expect(delta).toBe(3);
      }
    }
  });
});
