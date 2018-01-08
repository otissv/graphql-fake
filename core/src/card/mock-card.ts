import * as casual from 'casual';


export default function cardMock ({ 
  cardVendor, 
  locale
}: IMocksArgs ): ICard {
  return {
    cardType_:   () => casual.card_type,
    cardNumber_: () => casual.card_number(cardVendor),
    cardExp_:    () => casual.card_exp,
  };
}
