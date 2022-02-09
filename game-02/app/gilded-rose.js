var Item = /** @class */ (function () {
    function Item(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    return Item;
}());
var GildedRose = /** @class */ (function () {
    function GildedRose(items) {
        if (items === void 0) { items = []; }
        this.items = items;
    }
    GildedRose.prototype.updateQuality = function () {
        for (var i = 0; i < this.items.length; i++) {
            switch (this.items[i].name) {
                case 'Aged Brie': {
                    // Aged Brie: Actually increases in Quality the older it gets
                    this.items[i].quality = (this.items[i].quality < 50) ? (this.items[i].quality + 1) : this.items[i].quality;
                    this.items[i].sellIn = this.items[i].sellIn - 1;
                    break;
                }
                case 'Sulfuras, Hand of Ragnaros': {
                    // Sulfuras: Being a legendary item, never has to be sold or decreases in Quality, 
                    // It is a legendary item and as such its Quality is 80
                    this.items[i].quality = 80;
                    break;
                }
                case 'Backstage passes to a TAFKAL80ETC concert': {
                    // Backstage: Like aged brie, increases in Quality as its SellIn value approaches.
                    this.items[i].quality = (this.items[i].quality < 50) ? (this.items[i].quality + 1) : this.items[i].quality;
                    if (this.items[i].sellIn < 11) {
                        // Quality increases by 2 when there are 10 days
                        this.items[i].quality = (this.items[i].quality < 50) ? (this.items[i].quality + 1) : this.items[i].quality;
                    }
                    if (this.items[i].sellIn < 6) {
                        // Quality increases by 3 when there are 5 days 
                        this.items[i].quality = (this.items[i].quality < 50) ? (this.items[i].quality + 1) : this.items[i].quality;
                    }
                    if (this.items[i].sellIn <= 0) {
                        // Quality drops to 0 after the concert
                        this.items[i].quality = 0;
                    }
                    this.items[i].sellIn = this.items[i].sellIn - 1;
                    break;
                }
                case 'Conjured': {
                    // Conjured: Items degrade in Quality twice as fast as normal items
                    this.items[i].quality = (this.items[i].quality > 0) ? (this.items[i].quality - 2) : this.items[i].quality;
                    this.items[i].sellIn = this.items[i].sellIn - 2;
                    break;
                }
                default: {
                    // Default: Normal items
                    this.items[i].quality = (this.items[i].quality > 0) ? (this.items[i].quality - 1) : this.items[i].quality;
                    this.items[i].sellIn = this.items[i].sellIn - 1;
                    break;
                }
            }
        }
        return this.items;
    };
    return GildedRose;
}());
//---------------------------------------------------------- SOME TESTS -----------------------------------------------------------------------------------------
// Scenario 1: sellIn = 5 and quality = 0
var item1 = new Item('Aged Brie', 5, 0); // result: {name: 'Aged Brie', sellIn: 4, quality: 1}
var item2 = new Item('Sulfuras, Hand of Ragnaros', 5, 0); // result: {name: 'Sulfuras, Hand of Ragnaros', sellIn: 5, quality: 80}
var item3 = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 0); // result: {name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 4, quality: 3}
var item4 = new Item('Conjured', 5, 0); // result: {name: 'Conjured', sellIn: 3, quality: 0}
var item5 = new Item('Normal Item', 5, 0); // result: {name: 'Normal Item', sellIn: 4, quality: 0}
// // Scenario 3: sellIn = 5 and quality = 10
// var item1 = new Item('Aged Brie', 5, 10);                                 // result: {name: 'Aged Brie', sellIn: 4, quality: 11}
// var item2 = new Item('Sulfuras, Hand of Ragnaros', 5, 10);                // result: {name: 'Sulfuras, Hand of Ragnaros', sellIn: 5, quality: 80}
// var item3 = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10); // result: {name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 4, quality: 13}
// var item4 = new Item('Conjured', 5, 10);                                  // result: {name: 'Conjured', sellIn: 3, quality: 8}
// var item5 = new Item('Normal Item', 5, 10);                               // result: {name: 'Normal Item', sellIn: 4, quality: 9}
// // Scenario 4: sellIn = 10 and quality = 0
// var item1 = new Item('Aged Brie', 10, 0);                                 // result: {name: 'Aged Brie', sellIn: 9, quality: 1}
// var item2 = new Item('Sulfuras, Hand of Ragnaros', 10, 0);                // result: {name: 'Sulfuras, Hand of Ragnaros', sellIn: 10, quality: 80}
// var item3 = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 0); // result: {name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 9, quality: 2}
// var item4 = new Item('Conjured', 10, 0);                                  // result: {name: 'Conjured', sellIn: 8, quality: 0}
// var item5 = new Item('Normal Item', 10, 0);                               // result:  {name: 'Normal Item', sellIn: 9, quality: 0}
// // Scenario 5: sellIn = 10 and quality = 1
// var item1 = new Item('Aged Brie', 10, 1);                                 // result: {name: 'Aged Brie', sellIn: 9, quality: 2}
// var item2 = new Item('Sulfuras, Hand of Ragnaros', 10, 1);                // result: {name: 'Sulfuras, Hand of Ragnaros', sellIn: 10, quality: 80}
// var item3 = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 1); // result: {name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 9, quality: 3}
// var item4 = new Item('Conjured', 10, 1);                                  // result: {name: 'Conjured', sellIn: 8, quality: 0}
// var item5 = new Item('Normal Item', 10, 1);                               // result: {name: 'Normal Item', sellIn: 9, quality: 0}
// // Scenario 6: sellIn = 10 and quality = 10
// var item1 = new Item('Aged Brie', 10, 10);                                 // result: {name: 'Aged Brie', sellIn: 9, quality: 11}
// var item2 = new Item('Sulfuras, Hand of Ragnaros', 10, 10);                // result: {name: 'Sulfuras, Hand of Ragnaros', sellIn: 10, quality: 80}
// var item3 = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10); // result: {name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 9, quality: 12}
// var item4 = new Item('Conjured', 10, 10);                                  // result: {name: 'Conjured', sellIn: 8, quality: 8}
// var item5 = new Item('Normal Item', 10, 10);                               // result: {name: 'Normal Item', sellIn: 9, quality: 9}
// // Scenario 7: sellIn = 0 and quality = 10
// var item1 = new Item('Aged Brie', 0, 10);                                  // result: {name: 'Aged Brie', sellIn: -1, quality: 11}
// var item2 = new Item('Sulfuras, Hand of Ragnaros', 0, 10);                 // result: {name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80}
// var item3 = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10);  // result: {name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: -1, quality: 0}
// var item4 = new Item('Conjured', 0, 10);                                   // result: {name: 'Conjured', sellIn: -2, quality: 8}
// var item5 = new Item('Normal Item', 0, 10);                                // result: {name: 'Normal Item', sellIn: -1, quality: 9}
// // Scenario 8: sellIn = 20 and quality = 20
// var item1 = new Item('Aged Brie', 20, 20);                                  // result:  {name: 'Aged Brie', sellIn: 19, quality: 21}
// var item2 = new Item('Sulfuras, Hand of Ragnaros', 20, 20);                 // result:  {name: 'Sulfuras, Hand of Ragnaros', sellIn: 20, quality: 80}
// var item3 = new Item('Backstage passes to a TAFKAL80ETC concert', 20, 20);  // result: {name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 19, quality: 21}
// var item4 = new Item('Conjured', 20, 20);                                   // result: {name: 'Conjured', sellIn: 18, quality: 18}
// var item5 = new Item('Normal Item', 20, 20);                                // result: {name: 'Normal Item', sellIn: 19, quality: 19}
// // Scenario 9: sellIn = 20 and quality = -1
// var item1 = new Item('Aged Brie', 20, -1);                                  // result: {name: 'Aged Brie', sellIn: 19, quality: 0}
// var item2 = new Item('Sulfuras, Hand of Ragnaros', 20, -1);                 // result: {name: 'Sulfuras, Hand of Ragnaros', sellIn: 20, quality: 80}
// var item3 = new Item('Backstage passes to a TAFKAL80ETC concert', 20, -1);  // result: {name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 19, quality: 0}
// var item4 = new Item('Conjured', 20, -1);                                   // result: {name: 'Conjured', sellIn: 18, quality: -1}
// var item5 = new Item('Normal Item', 20, -1);                                // result: {name: 'Normal Item', sellIn: 19, quality: -1}
// // Scenario 10: sellIn = 5 and quality = 49
// var item1 = new Item('Aged Brie', 5, 49);                                  // result: {name: 'Aged Brie', sellIn: 4, quality: 50}
// var item2 = new Item('Sulfuras, Hand of Ragnaros', 5, 49);                 // result: {name: 'Sulfuras, Hand of Ragnaros', sellIn: 5, quality: 80}
// var item3 = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49);  // result: {name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 5, quality: 50}
// var item4 = new Item('Conjured', 5, 49);                                   // result: {name: 'Conjured', sellIn: 3, quality: 47}
// var item5 = new Item('Normal Item', 5, 49);                                // result: {name: 'Normal Item', sellIn: 4, quality: 48}
var allItems = [item1, item2, item3, item4, item5];
var gildRose = new GildedRose(allItems);
gildRose.updateQuality();
console.log(gildRose);
