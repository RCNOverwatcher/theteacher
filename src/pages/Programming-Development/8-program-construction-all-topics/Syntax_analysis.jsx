import React from "react";

function Syntax_analysis() {
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
                                Syntax analysis
                              </h1>
                              <p>
                                <strong class="NormalContentHeading">
                                  Syntax analysis
                                </strong>
                                <br />
                                Once the source code has been passed through the
                                lexical analysis program, the tokens generated
                                are passed to the syntax analysis program for
                                the next stage translation. This stage checks to
                                see if the program makes sense - the program
                                semantics.
                              </p>

                              <p>
                                <strong class="NormalContentHeading">
                                  Analysis of the token stream from lexical
                                  analysis
                                </strong>
                                <br />
                                Following lexical analysis, the syntax of the
                                program is checked. The first job is to take the
                                long stream of tokens from the lexical analysis
                                stage and to split them up into phrases. Each
                                phrase can then be checked against the rules of
                                the programming language (the syntax of the
                                language). Sentences in English must be
                                constructed according to rules. So for example,
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  "The computer helps me run my business."{" "}
                                </strong>
                                is okay but you cannot write,
                                <br />
                                <strong>
                                  "Computer business run the me helps my."{" "}
                                </strong>
                                because it breaks the syntax rules of English.
                              </p>
                              <p>
                                Here is another example of what this means
                                during compilation. Consider the instruction:
                              </p>
                              <p>
                                <strong>
                                  IF|SizeOfEngine|&gt;|2000|THEN|Payment|:=|Mileage|*|40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                During lexical analysis it is converted to:
                              </p>
                              <p>
                                <strong>
                                  TOKEN/IF|VARIABLE|RELATION|CONSTANT|TOKEN/IF|VARIABLE|TOKEN/ASSIGN|VARIABLE|TOKEN/
                                </strong>
                                <strong>MATHS|CONSTANT</strong>
                              </p>
                              <p>
                                When this is checked against the allowable
                                patterns in syntax analysis, it is found to be
                                fine. Now consider the same instruction that has
                                been written incorrectly, not following the
                                syntax rules.
                              </p>
                              <p align="center">
                                <strong>
                                  THEN |SizeOfEngine|&gt;|2000|
                                  IF|PaymentMileage|*|40|:=
                                </strong>
                              </p>
                              <p>
                                This would generate an unacceptable pattern of
                                tokens during lexical analysis. During the
                                syntax analysis, therefore, an error would be
                                generated because the pattern of tokens did not
                                match any in the compiler’s database of
                                allowable patterns.
                              </p>
                              <p>
                                It is a relatively easy job for a compiler to
                                keep a record of allowable patterns for a
                                high-level language. One method for describing
                                each pattern is known as Backus-Naur form, or
                                BNF. This is dealt with later. When the syntax
                                analysis stage is being carried out, each phrase
                                of code is checked against the allowable
                                patterns. This is known as
                                <strong>parsing the code</strong>. If a match
                                cannot be made, then the report generator
                                generates an error.
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

export default Syntax_analysis;