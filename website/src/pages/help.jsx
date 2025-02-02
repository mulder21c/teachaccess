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

  const supportLinks = [
    {
      content: `[이 사이트의 문서](${docUrl(
        "doc1.html"
      )})를 사용해서 더 자세히 학습하세요.`,
      title: "문서 보기",
    },
    {
      content: "문서 및 프로젝트에 대한 질문",
      title: "커뮤니티에 참여",
    },
    {
      content: "이 프로젝트의 새로운 내용 알아보기",
      title: "최신 상태 유지",
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post" style={{ textAlign: "center" }}>
          <header className="postHeader">
            <h1>도움이 필요하신가요?</h1>
          </header>
          <p>
            <a href="mailto: info@teachaccess.org">info@teachaccess.org</a>로
            연락 주시거나{" "}
            <a
              href="https://github.com/teachaccess/tutorial/issues"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub issue
            </a>
            를 등록해주세요.
          </p>
          <div>
            <p>피드백을 통해 튜토리얼을 개선하고 싶습니다.</p>
          </div>
          <GridBlock contents={supportLinks} layout="threeColumn" />
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
