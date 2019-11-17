var IShopItem = React.createClass({

  displayName: 'IShopItem',

  propTypes: {
    count: React.PropTypes.number.isRequired,
    brand: React.PropTypes.string.isRequired,
    model: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    photo: React.PropTypes.string.isRequired,
    itemID: React.PropTypes.string.isRequired,
    isSelected: React.PropTypes.bool,
    cbItemSelected: React.PropTypes.func,
    cbDeleteItem: React.PropTypes.func,
  },

  itemSelected: function (EO) {
    if (this.props.cbItemSelected != undefined) {
      this.props.cbItemSelected(this.props.itemID);
    }
  },

  deleteItem: function (EO) {
    EO.stopPropagation();
    this.props.cbDeleteItem(this.props.itemID);
  },

  render: function () {
    //is element selected
    var itemCSSClass = this.props.isSelected ? "IShopItem IShopItemSelected" : "IShopItem";

    var itemCountStr = (this.props.count > 0) ? "В наличии: " + this.props.count : "Нет в наличии";
    //div with text info (brand, model, price, availability) 
    var itemCompInfo = React.DOM.div({ className: 'IShopItemInfo' },
      React.DOM.div({ className: 'IShopItemName' }, this.props.brand + " " + this.props.model),
      React.DOM.div({ className: 'IShopItemPrice' }, "Цена: " + this.props.price + "BYN"),
      React.DOM.div({ className: 'IShopItemCount' }, itemCountStr),
      React.DOM.input({ className: 'IShopDeleteButton', type: 'button', value: 'Удалить', onClick: this.deleteItem }),
    );
    //div with all info about item (image + text info)
    return React.DOM.div({ className: itemCSSClass, onClick: this.itemSelected },
      React.DOM.img({ className: 'IShopItemPic', src: this.props.photo }),
      itemCompInfo,
    );
  },

});