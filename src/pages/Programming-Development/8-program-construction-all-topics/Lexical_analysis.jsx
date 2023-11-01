import React from "react";

function Lexical_analysis() {
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
                                Lexical analysis
                              </h1>
                              <p class="NormalContentHeading">
                                <strong>
                                  The actions during lexical analysis
                                </strong>
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      The source code is looked at. Any
                                      unnecessary parts of it are removed. This
                                      would include comments and spaces.
                                    </li>
                                    <li>
                                      Keywords and symbols are then replaced
                                      with ‘tokens’. A token is a generic
                                      description of the type of symbol. For
                                      example, if you had a constant called
                                      'months_in_year', this would be replaced
                                      by the token CONSTANT. If you had
                                      variables called 'speed' and 'distance'
                                      then these would be replaced with the
                                      token VARIABLE. If you had a keyword 'IF',
                                      this would get replaced with the selection
                                      token for 'IF'. If you had a maths
                                      operator such as ‘&gt;’, this would get
                                      replaced with the token OPERATOR. By
                                      replacing symbols, variables, keywords and
                                      so on with generic tokens, you can turn a
                                      program into a set of 'patterns' of
                                      instructions. It is then a relatively easy
                                      job for the compiler in the syntax stage
                                      to check each pattern against the
                                      allowable ones. Tokens replace:
                                    </li>
                                  </ul>
                                </li>
                              </ol>
                              <ol>
                                <ol>
                                  <li style="list-style-type: none">
                                    <ol>
                                      <li style="list-style-type: none">
                                        <ol style="list-style-type: lower-alpha">
                                          <li style="list-style-type: none">
                                            <ol style="list-style-type: lower-alpha">
                                              <li>
                                                A keyword like IF, FOR, PRINT,
                                                THEN and so on.
                                              </li>
                                              <li>
                                                A symbol that has got a fixed
                                                meaning, such as +, *.
                                              </li>
                                              <li>Numeric constants.</li>
                                              <li>
                                                User-defined variable names.
                                              </li>
                                            </ol>
                                          </li>
                                        </ol>
                                      </li>
                                    </ol>
                                  </li>
                                </ol>
                              </ol>
                              <p>
                                For example, if you had the following line in a
                                program: <strong>IF x &gt; 10 THEN</strong> this
                                might be changed into this pattern of tokens:
                              </p>
                              <p
                                style="text-align: left; margin-left: 30px"
                                align="center"
                              >
                                <strong>
                                  SELECTION/IF-VARIABLE-OPERATOR-CONSTANT-SELECTION/THEN
                                </strong>
                              </p>
                              <p>
                                Notice that the spaces have been removed and
                                generic descriptions (tokens) have replaced
                                keywords, variables, symbols and numeric
                                constants.
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      A look-up table is created. This stores
                                      the values of all constants used along
                                      with their data type.
                                    </li>
                                    <li>
                                      Variable names are also entered into the
                                      look-up table.
                                    </li>
                                  </ul>
                                </li>
                              </ol>
                              <p>
                                Once you have lexically analysed your program,
                                you end up with a string of tokens. This is
                                passed to the syntax analysis stage.
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

export default Lexical_analysis;
