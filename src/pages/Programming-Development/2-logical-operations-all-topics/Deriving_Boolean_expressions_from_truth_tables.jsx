import React from "react";

function Deriving_Boolean_expressions_from_truth_tables() {
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
                              <h1 style="text-align: center">
                                Deriving Boolean expressions from truth tables
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <strong>
                                    Introduction
                                    <br />
                                  </strong>
                                </strong>
                                We are going to derive Boolean expressions from
                                truth tables. We are not going to worry about
                                what system the truth table is describing. We
                                only want to understand how a Boolean expression
                                is derived from a truth table.
                              </p>

                              <p class="NormalContent">
                                Consider this truth table:
                              </p>
                              <p class="NormalContent">
                                <img
                                  style="margin: 20px; float: left"
                                  src="images/4b81d1db-dfda-48f2-ad40-4e82f218f545boolex1.GIF"
                                  alt="boolex1"
                                />
                              </p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">
                                To write down the Boolean expression that
                                describes this truth table (and therefore the
                                system that the truth table describes) we simply
                                write down the Boolean equation for each line in
                                the truth table where the output is 1.
                              </p>
                              <p class="NormalContent">
                                The output for the first line is 0, so we ignore
                                it.
                                <br />
                                The output for the second line is a 1. The
                                Boolean equation for this line is&nbsp;
                                <span
                                  style="
                                line-height: 16.3636360168457px;
                                text-decoration: overline;
                              "
                                >
                                  A
                                </span>
                                <span style="line-height: 16.3636360168457px">
                                  .B.
                                  <span
                                    style="
                                  line-height: 16.3636360168457px;
                                  text-decoration: overline;
                                "
                                  >
                                    C
                                  </span>
                                </span>
                                <br />
                                <span style="line-height: 16.3636360168457px">
                                  The output for the third line is a 1. The
                                  Boolean equation for this line is A.
                                  <span
                                    style="
                                  line-height: 16.3636360168457px;
                                  text-decoration: overline;
                                "
                                  >
                                    B
                                  </span>
                                  .
                                  <span
                                    style="
                                  line-height: 16.3636360168457px;
                                  text-decoration: overline;
                                "
                                  >
                                    C
                                  </span>
                                  <br />
                                  The output for the fourth line is 0, so we
                                  ignore it.
                                  <br />
                                  <span style="line-height: 16.3636360168457px">
                                    The output for the fifth line is a 1. The
                                    Boolean equation for this line is&nbsp;
                                  </span>
                                  <span
                                    style="
                                  line-height: 16.3636360168457px;
                                  text-decoration: overline;
                                "
                                  >
                                    A
                                  </span>
                                  <span style="line-height: 16.3636360168457px">
                                    .
                                    <span
                                      style="
                                    line-height: 16.3636360168457px;
                                    text-decoration: overline;
                                  "
                                    >
                                      B
                                    </span>
                                    .
                                    <span style="line-height: 16.3636360168457px">
                                      C
                                    </span>
                                  </span>
                                  <br />
                                  <span style="line-height: 16.3636360168457px">
                                    The output for the sixth line is 0, so we
                                    ignore it.
                                  </span>
                                  <br />
                                  <span style="line-height: 16.3636360168457px">
                                    The output for the seventh line is 0, so we
                                    ignore it.
                                  </span>
                                  <br />
                                  <span style="line-height: 16.3636360168457px">
                                    The output for the eighth line is a 1. The
                                    Boolean equation for this line is&nbsp;
                                    <span style="line-height: 16.3636360168457px">
                                      A
                                    </span>
                                  </span>
                                  <span style="line-height: 16.3636360168457px">
                                    .
                                    <span style="line-height: 16.3636360168457px">
                                      B
                                    </span>
                                    .
                                    <span style="line-height: 16.3636360168457px">
                                      C
                                    </span>
                                  </span>
                                </span>
                              </p>
                              <p class="NormalContent">
                                We can now get the Boolean equation for the
                                whole system simply by getting the equations
                                where the output was 1 and ORing them together.
                                This gives us the output Q:
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  <span
                                    style="
                                  line-height: 16.3636360168457px;
                                  text-decoration: overline;
                                "
                                  >
                                    A
                                  </span>
                                  <span style="line-height: 16.3636360168457px">
                                    .B.
                                    <span
                                      style="
                                    line-height: 16.3636360168457px;
                                    text-decoration: overline;
                                  "
                                    >
                                      C
                                    </span>
                                    &nbsp; + &nbsp;
                                    <span style="line-height: 16.3636360168457px">
                                      A.
                                    </span>
                                    <span
                                      style="
                                    line-height: 16.3636360168457px;
                                    text-decoration: overline;
                                  "
                                    >
                                      B
                                    </span>
                                    <span style="line-height: 16.3636360168457px">
                                      .
                                    </span>
                                    <span
                                      style="
                                    line-height: 16.3636360168457px;
                                    text-decoration: overline;
                                  "
                                    >
                                      C
                                    </span>
                                    &nbsp; + &nbsp;
                                    <span
                                      style="
                                    line-height: 16.3636360168457px;
                                    text-decoration: overline;
                                  "
                                    >
                                      A
                                    </span>
                                    <span style="line-height: 16.3636360168457px">
                                      .
                                      <span
                                        style="
                                      line-height: 16.3636360168457px;
                                      text-decoration: overline;
                                    "
                                      >
                                        B
                                      </span>
                                      .
                                      <span style="line-height: 16.3636360168457px">
                                        C
                                      </span>
                                    </span>
                                    &nbsp; + &nbsp;
                                    <span style="line-height: 16.3636360168457px">
                                      <span style="line-height: 16.3636360168457px">
                                        A
                                      </span>
                                    </span>
                                    <span style="line-height: 16.3636360168457px">
                                      .
                                      <span style="line-height: 16.3636360168457px">
                                        B
                                      </span>
                                      .
                                      <span style="line-height: 16.3636360168457px">
                                        C = Q
                                      </span>
                                    </span>
                                    &nbsp;
                                  </span>
                                </strong>
                                <br />
                                <span style="line-height: 1.5">
                                  <br />
                                  This equation may not be in its simplest form
                                  so we would need to see if we can simplify it
                                  using the range of Boolean algebra rules that
                                  we know. For the moment, however, we will
                                  leave that for later. What we have, is an
                                  accurate Boolean expression that describes a
                                  truth table, and therefore whatever system the
                                  truth table was based on.&nbsp;
                                </span>
                              </p>
                              <p class="NormalContent">
                                Consider another example.
                                <br />
                                <img
                                  style="margin: 20px; float: left"
                                  src="images/546d8479-f0ef-4907-afbe-cae1e91b3c1eboolex2.GIF"
                                  alt="boolex2"
                                />
                              </p>
                              <p
                                class="NormalContent"
                                style="
                              margin-top: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                As before, to write down the Boolean expression
                                that describes this truth table, we simply write
                                down the Boolean equation for each line in the
                                truth table where the output is 1.
                              </p>
                              <p
                                class="NormalContent"
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                The output for the first line is 0, so we ignore
                                it.
                                <br />
                                The output for the second line is a 0,
                                <span style="line-height: 16.3636360168457px">
                                  so we ignore it.
                                </span>
                                &nbsp;
                                <br />
                                <span style="line-height: 16.3636360168457px">
                                  The output for the third line is a 0
                                  <span style="line-height: 16.3636360168457px">
                                    ,&nbsp;
                                  </span>
                                  <span style="line-height: 16.3636360168457px">
                                    so we ignore it.
                                  </span>
                                  &nbsp;
                                  <br />
                                  The output for the fourth line is 1.&nbsp;
                                  <span style="line-height: 16.3636360168457px">
                                    The Boolean equation for this line is&nbsp;
                                    <span style="text-decoration: overline">
                                      <span style="line-height: 16.3636360168457px">
                                        <span style="line-height: 16.3636360168457px">
                                          A
                                        </span>
                                      </span>
                                    </span>
                                    <span style="line-height: 16.3636360168457px">
                                      .
                                      <span style="line-height: 16.3636360168457px">
                                        B
                                      </span>
                                      .
                                      <span style="line-height: 16.3636360168457px">
                                        C
                                      </span>
                                    </span>
                                  </span>
                                  <br />
                                  <span style="line-height: 16.3636360168457px">
                                    The output for the fifth line is a 1.&nbsp;
                                    <span style="line-height: 16.3636360168457px">
                                      The Boolean equation for this line
                                      is&nbsp;
                                      <span style="line-height: 16.3636360168457px">
                                        A
                                      </span>
                                    </span>
                                    <span style="line-height: 16.3636360168457px">
                                      .
                                      <span
                                        style="
                                      line-height: 16.3636360168457px;
                                      text-decoration: overline;
                                    "
                                      >
                                        B
                                      </span>
                                      .
                                      <span
                                        style="
                                      line-height: 16.3636360168457px;
                                      text-decoration: overline;
                                    "
                                      >
                                        C
                                      </span>
                                    </span>
                                  </span>
                                  <br />
                                  <span style="line-height: 16.3636360168457px">
                                    The output for the sixth line is 1.&nbsp;
                                    <span style="line-height: 16.3636360168457px">
                                      The Boolean equation for this line
                                      is&nbsp;
                                      <span style="line-height: 16.3636360168457px">
                                        A
                                      </span>
                                    </span>
                                    <span style="line-height: 16.3636360168457px">
                                      .
                                      <span
                                        style="
                                      line-height: 16.3636360168457px;
                                      text-decoration: overline;
                                    "
                                      >
                                        B
                                      </span>
                                      .
                                      <span style="line-height: 16.3636360168457px">
                                        C
                                      </span>
                                    </span>
                                  </span>
                                  <br />
                                  <span style="line-height: 16.3636360168457px">
                                    The output for the seventh line is 1.&nbsp;
                                    <span style="line-height: 16.3636360168457px">
                                      The Boolean equation for this line
                                      is&nbsp;
                                      <span style="line-height: 16.3636360168457px">
                                        A
                                      </span>
                                    </span>
                                    <span style="line-height: 16.3636360168457px">
                                      .
                                      <span style="line-height: 16.3636360168457px">
                                        B
                                      </span>
                                      .
                                      <span
                                        style="
                                      line-height: 16.3636360168457px;
                                      text-decoration: overline;
                                    "
                                      >
                                        C
                                      </span>
                                    </span>
                                  </span>
                                  <br />
                                  <span style="line-height: 16.3636360168457px">
                                    The output for the eighth line is a 1. The
                                    Boolean equation for this line is&nbsp;
                                    <span style="line-height: 16.3636360168457px">
                                      A
                                    </span>
                                  </span>
                                  <span style="line-height: 16.3636360168457px">
                                    .
                                    <span style="line-height: 16.3636360168457px">
                                      B
                                    </span>
                                    .
                                    <span style="line-height: 16.3636360168457px">
                                      C
                                    </span>
                                  </span>
                                </span>
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 16.3636360168457px">
                                  We can now get the Boolean equation for the
                                  whole system simply by getting the equations
                                  where the output was 1 and ORing them
                                  together. This gives us the output Q:
                                </span>
                                &nbsp;
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  <span
                                    style="
                                  line-height: 16.3636360168457px;
                                  text-decoration: overline;
                                "
                                  >
                                    <span style="line-height: 16.3636360168457px">
                                      <span style="line-height: 16.3636360168457px">
                                        A
                                      </span>
                                    </span>
                                  </span>
                                </strong>
                                <span style="line-height: 16.3636360168457px">
                                  <strong>
                                    .
                                    <span style="line-height: 16.3636360168457px">
                                      B
                                    </span>
                                    .
                                  </strong>
                                  <span style="line-height: 16.3636360168457px">
                                    <strong>
                                      C &nbsp;+ &nbsp;
                                      <span style="line-height: 16.3636360168457px">
                                        <span style="line-height: 16.3636360168457px">
                                          A
                                        </span>
                                      </span>
                                      <span style="line-height: 16.3636360168457px">
                                        .
                                        <span
                                          style="
                                        line-height: 16.3636360168457px;
                                        text-decoration: overline;
                                      "
                                        >
                                          B
                                        </span>
                                        .
                                        <span
                                          style="
                                        line-height: 16.3636360168457px;
                                        text-decoration: overline;
                                      "
                                        >
                                          C
                                        </span>
                                      </span>
                                      &nbsp; + &nbsp;
                                      <span style="line-height: 16.3636360168457px">
                                        <span style="line-height: 16.3636360168457px">
                                          A
                                        </span>
                                      </span>
                                      <span style="line-height: 16.3636360168457px">
                                        .
                                        <span
                                          style="
                                        line-height: 16.3636360168457px;
                                        text-decoration: overline;
                                      "
                                        >
                                          B
                                        </span>
                                        .
                                        <span style="line-height: 16.3636360168457px">
                                          C
                                        </span>
                                      </span>
                                      &nbsp; + &nbsp;
                                      <span style="line-height: 16.3636360168457px">
                                        <span style="line-height: 16.3636360168457px">
                                          A
                                        </span>
                                      </span>
                                      <span style="line-height: 16.3636360168457px">
                                        .
                                        <span style="line-height: 16.3636360168457px">
                                          B
                                        </span>
                                        .
                                        <span
                                          style="
                                        line-height: 16.3636360168457px;
                                        text-decoration: overline;
                                      "
                                        >
                                          C
                                        </span>
                                      </span>
                                      &nbsp; + &nbsp;
                                      <span style="line-height: 16.3636360168457px">
                                        <span style="line-height: 16.3636360168457px">
                                          A
                                        </span>
                                      </span>
                                      <span style="line-height: 16.3636360168457px">
                                        .
                                        <span style="line-height: 16.3636360168457px">
                                          B
                                        </span>
                                        .
                                        <span style="line-height: 16.3636360168457px">
                                          C = Q
                                        </span>
                                      </span>
                                      &nbsp;
                                    </strong>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                  </span>
                                </span>
                                &nbsp;
                              </p>
                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  As before, this equation may not be in its
                                  simplest form so we would need to see if we
                                  can simplify it using the range of Boolean
                                  algebra rules that we know.
                                </span>
                              </p>
                              <p>&nbsp;</p>
                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  Consider another example, this time with 4
                                  inputs. The process is exactly the same.
                                  You&nbsp;
                                  <span style="line-height: 16.3636360168457px">
                                    simply write down the Boolean equation for
                                    each line in the truth table where the
                                    output is 1 and then OR those expressions.
                                  </span>
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  <span style="line-height: 16.3636360168457px">
                                    <img
                                      style="margin: 20px; float: left"
                                      src="images/39c83727-90ac-44d2-97f1-f05b4d840a7fboolex3.GIF"
                                      alt="boolex3"
                                    />
                                  </span>
                                </span>
                              </p>
                              <p>&nbsp;</p>
                              <p>&nbsp;</p>
                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  The output for the first line is 0, so we
                                  ignore it.
                                </span>
                                <br style="line-height: 16.3636360168457px" />
                                <span style="line-height: 16.3636360168457px">
                                  The output for the second line is a 0,&nbsp;
                                </span>
                                <span style="line-height: 16.3636360168457px">
                                  so we ignore it.
                                </span>
                                <br style="line-height: 16.3636360168457px" />
                                <span style="line-height: 16.3636360168457px">
                                  The output for the third line is a 0
                                  <span style="line-height: 16.3636360168457px">
                                    ,&nbsp;
                                  </span>
                                  <span style="line-height: 16.3636360168457px">
                                    so we ignore it.
                                  </span>
                                  &nbsp;
                                  <br />
                                  <span style="line-height: 16.3636360168457px">
                                    The output for the fourth line is a 1.
                                  </span>
                                  <span style="line-height: 16.3636360168457px">
                                    &nbsp;
                                    <span style="line-height: 16.3636360168457px">
                                      The Boolean equation for this line
                                      is&nbsp;
                                      <span
                                        style="
                                      line-height: 16.3636360168457px;
                                      text-decoration: overline;
                                    "
                                      >
                                        <span style="line-height: 16.3636360168457px">
                                          <span style="line-height: 16.3636360168457px">
                                            A
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                    <span style="line-height: 16.3636360168457px">
                                      .
                                      <span
                                        style="
                                      line-height: 16.3636360168457px;
                                      text-decoration: overline;
                                    "
                                      >
                                        B
                                      </span>
                                      .
                                      <span style="line-height: 16.3636360168457px">
                                        C.D&nbsp;
                                      </span>
                                    </span>
                                  </span>
                                  <br />
                                  <span style="line-height: 16.3636360168457px">
                                    The output for the fifth line is a&nbsp;
                                    <span style="line-height: 16.3636360168457px">
                                      0
                                    </span>
                                    <span style="line-height: 16.3636360168457px">
                                      ,&nbsp;
                                    </span>
                                    <span style="line-height: 16.3636360168457px">
                                      so we ignore it.
                                    </span>
                                  </span>
                                  <br />
                                  <span style="line-height: 16.3636360168457px">
                                    The output for the sixth line is&nbsp;
                                    <span style="line-height: 16.3636360168457px">
                                      0
                                    </span>
                                    <span style="line-height: 16.3636360168457px">
                                      ,&nbsp;
                                    </span>
                                    <span style="line-height: 16.3636360168457px">
                                      so we ignore it.
                                    </span>
                                  </span>
                                  <br />
                                  <span style="line-height: 16.3636360168457px">
                                    The output for the seventh line is&nbsp;
                                    <span style="line-height: 16.3636360168457px">
                                      0
                                    </span>
                                    <span style="line-height: 16.3636360168457px">
                                      ,&nbsp;
                                    </span>
                                    <span style="line-height: 16.3636360168457px">
                                      so we ignore it.
                                    </span>
                                  </span>
                                  <br />
                                  <span style="line-height: 16.3636360168457px">
                                    The output for the eighth line is a&nbsp;
                                    <span style="line-height: 16.3636360168457px">
                                      0
                                    </span>
                                    <span style="line-height: 16.3636360168457px">
                                      ,&nbsp;
                                    </span>
                                    <span style="line-height: 16.3636360168457px">
                                      so we ignore it.
                                      <br />
                                      <span style="line-height: 16.3636360168457px">
                                        The output for the ninth line is 1
                                        <span style="line-height: 16.3636360168457px">
                                          .
                                        </span>
                                        <span style="line-height: 16.3636360168457px">
                                          &nbsp;
                                          <span style="line-height: 16.3636360168457px">
                                            The Boolean equation for this line
                                            is&nbsp;
                                            <span
                                              style="
                                            line-height: 16.3636360168457px;
                                          "
                                            >
                                              A
                                            </span>
                                          </span>
                                          <span style="line-height: 16.3636360168457px">
                                            .
                                            <span
                                              style="
                                            line-height: 16.3636360168457px;
                                            text-decoration: overline;
                                          "
                                            >
                                              B
                                            </span>
                                            .
                                            <span
                                              style="
                                            line-height: 16.3636360168457px;
                                            text-decoration: overline;
                                          "
                                            >
                                              C
                                            </span>
                                            <span
                                              style="
                                            line-height: 16.3636360168457px;
                                          "
                                            >
                                              .
                                              <span
                                                style="
                                              line-height: 16.3636360168457px;
                                              text-decoration: overline;
                                            "
                                              >
                                                D
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                      <br
                                        style="
                                      line-height: 16.3636360168457px;
                                    "
                                      />
                                      <span style="line-height: 16.3636360168457px">
                                        The output for the tenth line is a
                                        0,&nbsp;
                                      </span>
                                      <span style="line-height: 16.3636360168457px">
                                        so we ignore it.
                                      </span>
                                      <br
                                        style="
                                      line-height: 16.3636360168457px;
                                    "
                                      />
                                      <span style="line-height: 16.3636360168457px">
                                        The output for the eleventh line is a 0
                                        <span style="line-height: 16.3636360168457px">
                                          ,&nbsp;
                                        </span>
                                        <span style="line-height: 16.3636360168457px">
                                          so we ignore it.
                                        </span>
                                        &nbsp;
                                        <br />
                                        <span style="line-height: 16.3636360168457px">
                                          The output for the twelfth line is a 0
                                        </span>
                                        <span style="line-height: 16.3636360168457px">
                                          ,&nbsp;
                                        </span>
                                        <span style="line-height: 16.3636360168457px">
                                          so we ignore it.
                                        </span>
                                        <br />
                                        <span style="line-height: 16.3636360168457px">
                                          The output for the thirteenth line is
                                          a&nbsp;
                                          <span style="line-height: 16.3636360168457px">
                                            0
                                          </span>
                                          <span style="line-height: 16.3636360168457px">
                                            ,&nbsp;
                                          </span>
                                          <span style="line-height: 16.3636360168457px">
                                            so we ignore it.
                                          </span>
                                        </span>
                                        <br />
                                        <span style="line-height: 16.3636360168457px">
                                          The output for the fourteenth line
                                          is&nbsp;
                                          <span style="line-height: 16.3636360168457px">
                                            0
                                          </span>
                                          <span style="line-height: 16.3636360168457px">
                                            ,&nbsp;
                                          </span>
                                          <span style="line-height: 16.3636360168457px">
                                            so we ignore it.
                                          </span>
                                        </span>
                                        <br />
                                        <span style="line-height: 16.3636360168457px">
                                          The output for the fifteenth line
                                          is&nbsp;
                                          <span style="line-height: 16.3636360168457px">
                                            1
                                            <span
                                              style="
                                            line-height: 16.3636360168457px;
                                          "
                                            >
                                              .
                                            </span>
                                            <span
                                              style="
                                            line-height: 16.3636360168457px;
                                          "
                                            >
                                              &nbsp;
                                              <span
                                                style="
                                              line-height: 16.3636360168457px;
                                            "
                                              >
                                                The Boolean equation for this
                                                line is&nbsp;
                                                <span
                                                  style="
                                                line-height: 16.3636360168457px;
                                              "
                                                >
                                                  A
                                                </span>
                                              </span>
                                              <span
                                                style="
                                              line-height: 16.3636360168457px;
                                            "
                                              >
                                                .
                                                <span
                                                  style="
                                                line-height: 16.3636360168457px;
                                              "
                                                >
                                                  B
                                                </span>
                                                .
                                                <span
                                                  style="
                                                line-height: 16.3636360168457px;
                                              "
                                                >
                                                  C.
                                                  <span
                                                    style="
                                                  line-height: 16.3636360168457px;
                                                  text-decoration: overline;
                                                "
                                                  >
                                                    D
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                        <br />
                                        <span style="line-height: 16.3636360168457px">
                                          The output for the sixteenth line is
                                          a&nbsp;
                                          <span style="line-height: 16.3636360168457px">
                                            1
                                            <span
                                              style="
                                            line-height: 16.3636360168457px;
                                          "
                                            >
                                              .
                                            </span>
                                            <span
                                              style="
                                            line-height: 16.3636360168457px;
                                          "
                                            >
                                              &nbsp;
                                              <span
                                                style="
                                              line-height: 16.3636360168457px;
                                            "
                                              >
                                                The Boolean equation for this
                                                line is&nbsp;
                                                <span
                                                  style="
                                                line-height: 16.3636360168457px;
                                              "
                                                >
                                                  A
                                                </span>
                                              </span>
                                              <span
                                                style="
                                              line-height: 16.3636360168457px;
                                            "
                                              >
                                                .
                                                <span
                                                  style="
                                                line-height: 16.3636360168457px;
                                              "
                                                >
                                                  B
                                                </span>
                                                .
                                                <span
                                                  style="
                                                line-height: 16.3636360168457px;
                                              "
                                                >
                                                  C.D
                                                  <br />
                                                  <br />
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                  <span style="line-height: 16.3636360168457px">
                                    <span style="line-height: 16.3636360168457px">
                                      This gives us
                                    </span>
                                  </span>
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  <span style="line-height: 16.3636360168457px">
                                    <span style="line-height: 16.3636360168457px">
                                      <strong>
                                        <span style="line-height: 16.3636360168457px">
                                          <span
                                            style="
                                          line-height: 16.3636360168457px;
                                          text-decoration: overline;
                                        "
                                          >
                                            <span
                                              style="
                                            line-height: 16.3636360168457px;
                                          "
                                            >
                                              <span
                                                style="
                                              line-height: 16.3636360168457px;
                                            "
                                              >
                                                A
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                        <span style="line-height: 16.3636360168457px">
                                          .
                                          <span
                                            style="
                                          line-height: 16.3636360168457px;
                                          text-decoration: overline;
                                        "
                                          >
                                            B
                                          </span>
                                          .
                                          <span style="line-height: 16.3636360168457px">
                                            C.D &nbsp;+ &nbsp;
                                            <span
                                              style="
                                            line-height: 16.3636360168457px;
                                          "
                                            >
                                              <span
                                                style="
                                              line-height: 16.3636360168457px;
                                            "
                                              >
                                                A
                                              </span>
                                            </span>
                                            <span
                                              style="
                                            line-height: 16.3636360168457px;
                                          "
                                            >
                                              .
                                              <span
                                                style="
                                              line-height: 16.3636360168457px;
                                              text-decoration: overline;
                                            "
                                              >
                                                B
                                              </span>
                                              .
                                              <span
                                                style="
                                              line-height: 16.3636360168457px;
                                              text-decoration: overline;
                                            "
                                              >
                                                C
                                              </span>
                                              <span
                                                style="
                                              line-height: 16.3636360168457px;
                                            "
                                              >
                                                .
                                                <span
                                                  style="
                                                line-height: 16.3636360168457px;
                                                text-decoration: overline;
                                              "
                                                >
                                                  D
                                                </span>
                                              </span>
                                            </span>
                                            &nbsp;
                                          </span>
                                        </span>
                                        &nbsp;+ &nbsp;
                                        <span style="line-height: 16.3636360168457px">
                                          <span style="line-height: 16.3636360168457px">
                                            A
                                          </span>
                                        </span>
                                        <span style="line-height: 16.3636360168457px">
                                          .
                                          <span style="line-height: 16.3636360168457px">
                                            B
                                          </span>
                                          .
                                          <span style="line-height: 16.3636360168457px">
                                            C.
                                            <span
                                              style="
                                            line-height: 16.3636360168457px;
                                            text-decoration: overline;
                                          "
                                            >
                                              D
                                            </span>
                                          </span>
                                        </span>
                                        &nbsp; + &nbsp;
                                        <span style="line-height: 16.3636360168457px">
                                          <span style="line-height: 16.3636360168457px">
                                            A
                                          </span>
                                        </span>
                                        <span style="line-height: 16.3636360168457px">
                                          .
                                          <span style="line-height: 16.3636360168457px">
                                            B
                                          </span>
                                          .
                                          <span style="line-height: 16.3636360168457px">
                                            C.D = Q
                                          </span>
                                        </span>
                                        &nbsp; &nbsp;
                                      </strong>
                                    </span>
                                  </span>
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  <span style="line-height: 16.3636360168457px">
                                    <span style="line-height: 16.3636360168457px">
                                      <span style="line-height: 16.3636360168457px">
                                        As before, this equation may not be in
                                        its simplest form so we would need to
                                        see if we can simplify it using the
                                        range of Boolean algebra rules that we
                                        know.
                                      </span>
                                      &nbsp; &nbsp;&nbsp;
                                    </span>
                                  </span>
                                </span>
                              </p>
                              <p>&nbsp;</p>
                              <p>&nbsp;&nbsp;</p>
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

export default Deriving_Boolean_expressions_from_truth_tables;