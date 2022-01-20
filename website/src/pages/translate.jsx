/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Layout from "@theme/Layout";

const React = require("react");

const CompLibrary = {
  Container: (props) => <div {...props} />,
  GridBlock: (props) => <div {...props} />,
  MarkdownBlock: (props) => <div {...props} />,
};

const { Container } = CompLibrary;
const { GridBlock } = CompLibrary;

function Help(props) {
  const { config: siteConfig, language = "" } = props;
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
  const langPart = `${language ? `${language}/` : ""}`;
  const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post" style={{ textAlign: "center" }}>
          <header className="postHeader">
            <h1>번역</h1>
          </header>
          <p>
            원문:{" "}
            <a
              href="https://teachaccess.github.io/tutorial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://teachaccess.github.io/tutorial/
            </a>
          </p>
          <p>
            번역:{" "}
            <a
              href="https://github.com/mulder21c"
              target="_blank"
              rel="noreferrer noopener"
            >
              @mulder21c
            </a>
          </p>
          <p>
            본 번역은 원저작자 teach access initiatives의 허가 및 오픈소스
            라이선스 하에 번역 되었습니다.
          </p>
          <p>
            오역이나 오탈자 등의 발견 시{" "}
            <a href="mailto: mail@mulder21c.io">메일</a>이나{" "}
            <a
              href="https://github.com/mulder21c/teachaccess/issues"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub issue
            </a>
            에 등록해주세요.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default (props) => (
  <Layout>
    <Help {...props} />
  </Layout>
);
