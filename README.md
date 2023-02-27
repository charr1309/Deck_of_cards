Deck of Cards
An app that displays a deck of cards, one card at a time. When the page loads, request is sent to https://deckofcardsapi.com/api/deck/new/shuffle to create a new deck. Deck Id given is stored, so further requests can be made to retreive each card image. A button is provided to allow a user to draw a new card.

When a user clicks the button, another request is sent to the API, this time to https://deckofcardsapi.com/api/deck/${deck_id}/draw/. Data included in the response  displays a new card image.

Every time the user clicks, the app displays a new card until the deck is empty. And the user is told there are no cards left!

