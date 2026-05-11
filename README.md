# tokipona-card

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A web-based, drag-and-drop tool for building Toki Pona sentences using interactive vocabulary cards. Each card displays a word in `linja suwi` script, Latin script, and its Japanese translation.

[**Live Demo**](https://code4fukui.github.io/tokipona-card/)


![A screenshot of the tokipona-card interface showing a white canvas with stacks of cards on the left and top. The cards are grey with black text. On the left, there are stacks for pronouns like 'mi' and 'sina'. Below them are particles like 'li' and 'e'. To the right, the main vocabulary is arranged in alphabetically sorted stacks.](https://user-images.githubusercontent.com/1552844/280789073-77441584-0738-4034-8097-092592751711.png)


## Features

-   **Interactive Sentence Building:** Drag and drop cards to visually construct sentences on a large canvas.
-   **Rich Card Information:** Each card displays a word in three formats:
    -   Latin script (e.g., `toki`)
    -   `linja suwi` script (a variant of sitelen pona)
    -   Japanese translation (e.g., `言語`)
-   **Organized Vocabulary:** Cards are pre-sorted into categories. Pronouns, particles, and punctuation are grouped on the left, while the main vocabulary is arranged alphabetically in stacks to the right.
-   **High-Frequency Words:** Common words like pronouns (`mi`, `sina`), particles (`li`, `e`), and punctuation are provided in multiple copies (3 each) for convenience.
-   **Zero Installation:** Runs entirely in any modern web browser.

## Usage

1.  Open the [live demo](https://code4fukui.github.io/tokipona-card/) or `index.html` in your web browser.
2.  Click and drag cards from the organized stacks onto the main white area.
3.  Arrange the cards to form phrases and sentences.

## Data and Dependencies

This project runs entirely client-side and loads the following external resources:

-   **Word Data:** [tok2jpn.csv](https://code4fukui.github.io/tok2jpn/tok2jpn.csv) from the `code4fukui/tok2jpn` project.
-   **Font:** [linjasuwi.otf](https://code4fukui.github.io/tok2jpn/linjasuwi.otf) is used for rendering the `linja suwi` script.
-   **JavaScript Libraries:**
    -   [DraggableCards.js](https://code4fukui.github.io/draggable-cards/DraggableCards.js) for drag-and-drop functionality.
    -   [CSV.js](https://js.sabae.cc/CSV.js) for parsing the word data file.
    -   [shuffle.js](https://js.sabae.cc/shuffle.js) for randomizing arrays.

## Related Projects

-   [tok2jpn](https://code4fukui.github.io/tok2jpn/): The data source for this project.
-   [mekuriawase-tokipona](https://code4fukui.github.io/mekuriawase-tokipona/): A Toki Pona matching game.

## References

-   [Toki Pona (official site)](https://tokipona.org/)
-   [linja suwi font](https://linjasuwi.ap5.dev/)
