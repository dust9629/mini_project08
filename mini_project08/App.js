import Navbar from './components/Navbar.js';

import HomePage from './pages/HomePage.js';
import DocumentsPage from './pages/DocumentsPage.js';
import DocumentEditPage from './pages/DocumentEditPage.js';

import { initRouter, push, replace, replaceBack } from './utils/router.js';
import { request } from './utils/api.js';
import { getItem, removeItem, setItem } from './utils/storage.js';
import { Trie } from './utils/trie.js';

const KEY_IS_OPEN_DOCUMENT_MAP = "is_open_document_map";

export default function App ({ $target }){
    $target.style = 'max-height: 100vh; overflow: auto;';

    const getIsOpenMap = () => getItem(KEY_IS_OPEN_DOCUMENT_MAP, {});

    const toggleIsOpenMap = (document) => {
        const nextIsOpenMap = getIsOpenMap();

        nextIsOpenMap[documentId]
            ? delete nextIsOpenMap[documentId]
            : (nextIsOpenMap[documentId] = true);
        setItem(KEY_IS_OPEN_DOCUMENT_MAP, nextIsOpenMap);
        navBar.documentListRender();
    };

    const onClickListItemAdd = async (parentId = null) => {
        const { id } = await request ('documents', {
            method: 'POST',
            body: JSON.stringify({
                title: "제목을 적어주세요",
                parentL parentId,
            }),
        });

        navBar.documentListFetch();
        push(`/documents/${id}`);

        if (!getIsOpenMap()[id]) toggleIsOpenMap(id);
    };

    const onClickListItemTitle = (documentId) => {
        push(`/documents/${documentId}`);
        toggleIsOpenMap(documentId);
    };
}