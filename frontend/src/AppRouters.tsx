import { Routes, Route } from 'react-router-dom';
import { Provider } from 'jotai'
import { UIProvider } from "@yamada-ui/react";

import {IndexPage} from "./components/IndexPage.tsx";
import {NewQuestionPage} from "./components/NewQuestionPage.tsx";
import {AnswerQuestionPage} from "./components/AnswerQuestionPage.tsx";
import SignUpView from "./components/SignUpView.tsx";
import LoginView from "./components/LoginView.tsx";

function AppRoutes() {

  return (
    <UIProvider>
      <Provider>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/new" element={<NewQuestionPage />} />
          <Route path="/answer" element={<AnswerQuestionPage />} />
            <Route path="/sign-up" element={<SignUpView />} />
            <Route path="/login" element={<LoginView />} />
        </Routes>
      </Provider>
    </UIProvider>
  )
}

export default AppRoutes
