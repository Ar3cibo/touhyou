import { Routes, Route } from 'react-router-dom';
import { Provider } from 'jotai'
import { UIProvider } from "@yamada-ui/react";

import {IndexPage} from "./components/IndexPage.tsx";
import {NewQuestionPage} from "./components/NewQuestionPage.tsx";
import {AnswerQuestionPage} from "./components/AnswerQuestionPage.tsx";

function AppRoutes() {

  return (
    <UIProvider>
      <Provider>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/new" element={<NewQuestionPage />} />
          <Route path="/answer" element={<AnswerQuestionPage />} />
        </Routes>
      </Provider>
    </UIProvider>
  )
}

export default AppRoutes
