var IShop = React.createClass({

    displayName: 'IShop',

    propTypes: {
        shopName: React.PropTypes.string.isRequired,
        items: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                count: React.PropTypes.number.isRequired,
                brand: React.PropTypes.string.isRequired,
                model: React.PropTypes.string.isRequired,
                price: React.PropTypes.number.isRequired,
                photo: React.PropTypes.string.isRequired,
                itemID: React.PropTypes.string.isRequired,
            })
        )
    },

    getInitialState: function () {
        return { selectedItem: null, items: this.props.items };
    },

    itemSelected: function (itemId) {
        if (this.state.selectedItem == itemId) {
            //if current element already selected, than we unselect it
            this.setState( {selectedItem: null} );
        } else {
            this.setState( {selectedItem: itemId} );
        }
    },

    deleteItem: function (itemId) {
        if(confirm("Вы действительно хотите удалить элемент?")) {
            this.setState( {items: this.state.items.filter(item => item.itemID != itemId)} );
        }
    },

    render: function () {
        var itemsCode = [];

        this.state.items.forEach(item => {
            var isSelected = (this.state.selectedItem == item.itemID);
            var itemCode = React.createElement(IShopItem, {
                key: item.itemID,
                count: item.count,
                model: item.model,
                brand: item.brand,
                price: item.price,
                photo: item.photo,
                itemID: item.itemID,
                isSelected: isSelected,
                cbItemSelected: this.itemSelected,
                cbDeleteItem: this.deleteItem,
            });
            itemsCode.push(itemCode);
        });

        return React.DOM.div({ className: 'IShop' },
            React.DOM.div({ className: 'IShopName' }, this.props.shopName),
            React.DOM.div({ className: 'IShopItems' }, itemsCode),
        );
    },

});