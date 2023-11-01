import React from "react";

function Boolean_operators() {
  return (
    <div id="jsn-maincontent" class="span9 order1 row-fluid">
      <div id="jsn-maincontent_inner">
        <div id="jsn-centercol">
          <div id="jsn-centercol_inner">
            <div id="jsn-mainbody-content" class="jsn-hasmainbody">
              <div id="jsn-mainbody-content-inner1">
                <div id="jsn-mainbody-content-inner2">
                  <div id="jsn-mainbody-content-inner3">
                    <div id="jsn-mainbody-content-inner4" class="row-fluid">
                      <div
                        id="jsn-mainbody-content-inner"
                        class="span12 order1"
                      >
                        <div id="jsn-mainbody">
                          <div id="system-message-container"></div>

                          <div
                            class="item-page"
                            itemscope
                            itemtype="https://schema.org/Article"
                          >
                            <meta itemprop="inLanguage" content="en-GB" />

                            <div itemprop="articleBody">
                              <p></p>
                              <h1
                                class="ContentHeading"
                                style="text-align: center"
                                align="center"
                              >
                                Boolean operators
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Introduction
                                  </span>
                                </strong>
                                <br />
                                Boolean operators allow you to test relational
                                operator expressions.
                              </p>
                              <p class="NormalContent" align="left">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Boolean operators
                                  </span>
                                </strong>
                                <br />
                                The operators you need to know are AND, OR and
                                NOT. The result of a Boolean expression, like
                                the result of a relational expression, will be
                                either TRUE or FALSE.
                              </p>

                              <p
                                class="NormalContent"
                                style="text-align: left"
                                align="center"
                              >
                                <span class="style1">
                                  <strong>
                                    Imagine that a = 1, b = 5, c = 5, d = 10.
                                    Study these examples:
                                  </strong>
                                </span>
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  <span class="NormalContentHeading">
                                    (a &gt;b) AND (c&gt;a)
                                  </span>
                                </strong>
                                <br />
                                a&gt;b is FALSE whilst c&gt;a is TRUE. The
                                overall expression is FALSE, however, because
                                both halves of the AND must be TRUE. If one half
                                or both halves are FALSE, then the overall
                                statement is FALSE.
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  <span class="NormalContentHeading">
                                    (a &gt;b) OR (c&gt;a)
                                  </span>
                                </strong>
                                <br />
                                a&gt;b is FALSE whilst c&gt;a is TRUE. The
                                overall expression is TRUE, however, because
                                only one half (or both parts) has to be TRUE. If
                                both halves are FALSE, then the overall
                                statement is FALSE.
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  <span class="NormalContentHeading">
                                    (b=c) AND (d&lt;=a)
                                  </span>
                                </strong>
                                <br />
                                (b=c) is TRUE whilst (d&lt;=a) is FALSE. The
                                overall expression is FALSE, however, because
                                both halves of the AND must be TRUE. If one half
                                or both halves are FALSE, then the overall
                                statement is FALSE.
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  <span class="NormalContentHeading">
                                    (b=c) OR (d&lt;=a)
                                  </span>
                                </strong>
                                <br />
                                (b=c) is TRUE whilst (d&lt;=a) is FALSE. The
                                overall expression is TRUE, however, because
                                only one half (or both parts) has to be TRUE. If
                                both halves are FALSE, then the overall
                                statement is FALSE.
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                NOT always goes to the left of a Boolean
                                expression and inverts the result of the
                                expression. If the expression evaluates to TRUE,
                                then NOT makes the overall result FALSE. If the
                                expression evaluates to FALSE, then NOT makes
                                the overall result TRUE.
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  <span class="NormalContentHeading">
                                    NOT (b=c)
                                  </span>
                                </strong>
                                <br />
                                (b=c) is TRUE. The overall result equates to
                                FALSE, however, because of the NOT operator.
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  <span class="NormalContentHeading">
                                    NOT(b&gt;d)
                                  </span>
                                </strong>
                                <br />
                                (b&gt;d) is FALSE. The overall result equates to
                                TRUE, however, because of the NOT operator.
                              </p>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boolean_operators;