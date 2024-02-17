import Button from '../components/Button.js';

export default function HomePage({
    $target,
    onClickListItemAdd,
    onClickViewAllFolderOpen,
}) {
    const $page = document.createElement('div');
    $page.id = 'page';
    $page.style =
    `display:flex;
    flex-direction: column;
    gap: 1.2rem;
    justify-content: center;
    align-items: center;
    `
    const newDocumentButton = new Button({
        $target: $page,
        initialState: { text : '+ 새 문서 만들기' },
        onclick: onClickListItemAdd,
    });

    const viewAllFolderOpenButton = new Button({
        $target: $page,
        initialState: { text : '📁 모두 열고 보기'},
        onClick: onClickViewAllFolderOpen,
    });

    this.setState = () => {
        this.render();
    };
    this.render = () => {
        newDocumentButton.render
    }
}