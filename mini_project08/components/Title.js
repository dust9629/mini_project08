// title 함수 선언
export default function Title ({ $target, text ='제목', headingNumber = 1 }) {
    //  h태그 생성, id명 설정, 태그 텍스트 추가, 렌더 함수 작동
    const $title = document.createElement(`h${headingNumber}`);
    $title.id = 'title';
    $title.textContent = text;
    
    this.render = () => {
        $target.prepend($title);
    };
}