var IShop = React.createClass({

    displayName: 'IShop',

    render: function () {

        var itemsCode = [];
        this.props.items.forEach(item => {
            var itemCountStr = (item.count > 0) ? "В наличии" : "Нет в наличии";
            //div with text info (brand, model, price, availability) 
            var itemCompInfo = React.DOM.div({ className: 'IShopItemInfo' },
                React.DOM.div({ className: 'IShopItemName' }, item.brand + " " + item.model),
                React.DOM.div({ className: 'IShopItemPrice' }, "Цена: " + item.price + "BYN"),
                React.DOM.div({ className: 'IShopItemCount' }, itemCountStr),
            );
            //div with all info about item (image + text info)
            var itemCode = React.DOM.div({ key: item.model, className: 'IShopItem' },
                React.DOM.img({ className: 'IShopItemPic', src: item.photo }),
                itemCompInfo,
            );
            itemsCode.push(itemCode);
        });

        return React.DOM.div({ className: 'IShop' },
            React.DOM.div({ className: 'IShopName' }, this.props.shopName),
            React.DOM.div({ className: 'IShopItems' }, itemsCode),
        );
    },

});