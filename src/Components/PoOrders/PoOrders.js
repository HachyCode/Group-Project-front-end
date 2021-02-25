import React from 'react';
import {
    OrderBox,
    ItemBox,
    Line,
    OrderID,
    ItemID,
    ItemName,
    Qty,
    UnitPrice,
    SubTotal,
    OrderAddBtn,
    FilterOrderID,
    FilterItemID,
    FilterItemName,
    FilterQty,
    FilterUnitPrice,
    FilterSubTotal
} from './PoOrdersCSS';

function PoOrders() {
    return (
        <div>
            <OrderBox>
                <ItemBox>
                    <FilterOrderID>Order ID</FilterOrderID>
                    <FilterItemID>Item ID</FilterItemID>
                    <FilterItemName>Item Name</FilterItemName>
                    <FilterQty>QTY</FilterQty>
                    <FilterUnitPrice>Unit Price</FilterUnitPrice>
                    <FilterSubTotal>Sub-Total</FilterSubTotal>
                </ItemBox>
                <Line/>
                <ItemBox>
                    <OrderID>999999999</OrderID>{/* Order ID */}
                    <ItemID>NRF10</ItemID>{/* Item ID */}
                    <ItemName>LEGO Classic Bricks and Ideas - 11001</ItemName>{/* Item Name */}
                    <Qty/>{/* QTY */}
                    <UnitPrice>£____.___</UnitPrice>{/* Unit Price */}
                    <SubTotal>£________.__</SubTotal>{/* Sub-Total */}
                </ItemBox>
                <OrderAddBtn>Add Item</OrderAddBtn>
                <OrderAddBtn>Add Item</OrderAddBtn>
                <OrderAddBtn>Add Item</OrderAddBtn>
                <OrderAddBtn>Add Item</OrderAddBtn>
            </OrderBox>
        </div>
    )
}

export default PoOrders
