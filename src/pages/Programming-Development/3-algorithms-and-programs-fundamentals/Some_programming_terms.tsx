import React from "react";

function Some_programming_terms() {
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
                                Some programming terms
                              </h1>
                              <p>
                                <strong>
                                  <span class="NormalContentHeading">
                                    Introduction
                                  </span>
                                </strong>
                                <br />
                                Like all things, there are a number of terms,
                                jargon, that you need to know when programming.
                              </p>

                              <p>
                                <strong class="NormalContentHeading">
                                  Variables
                                </strong>
                                <br />
                                You can think of a variable as a box, the
                                contents of which can change. The programmer
                                sets up a variable at the beginning of a
                                program, giving it a name (an 'identifier') and
                                saying what data type it is (so the computer can
                                reserve the right amount of RAM for the value
                                that the variable will hold). In addition, the
                                programmer may also decide to put a starting
                                value inside the variable. This is known as
                                'initialisation' and means that the variable
                                will have a known value in when the program
                                starts, as opposed to an unknown value. Using
                                variables with names rather than memory address
                                makes programs easier to read. In addition,
                                programs can be loaded anywhere in RAM by the
                                operating system and even in different places in
                                RAM on different occasions! All the operating
                                system has to do is allocate available memory
                                addresses to the variable names!
                              </p>
                              <p>
                                <strong>
                                  <span class="NormalContentHeading">
                                    Constants
                                  </span>
                                </strong>
                                <br />
                                You can think of a constant as a box, the
                                contents of which never change. The programmer
                                sets up a constant at the beginning of a
                                program, giving it a name (an 'identifier') and
                                saying what data type it is (so the computer can
                                reserve the right amount of RAM for the value
                                that the constant will hold). The programmer
                                will then set the value of the constant.
                              </p>
                              <p>
                                Constants are used in programs so that if the
                                programmer needs to make a change, they only
                                have to make the change in one place. For
                                example, if the VAT rate is needed in many
                                places in a program, the programmer refers to a
                                constant called VAT_RATE. At the beginning of
                                the program, this was declared by the programmer
                                to be 0.175. Suppose the VAT rate changes to 15%
                                in the Budget rather than the 17.5% it was
                                before. All the programmer has to do is change
                                the value where the contant was declared. They
                                don't have to go through the whole program and
                                change every instance where the VAT rate was
                                used.
                              </p>
                              <p>
                                <span class="NormalContentHeading">
                                  <strong>Identifiers</strong>
                                </span>
                                <br />
                                An identifier is the fancy programming word for
                                a name of something that the programmer sets up,
                                like a variable or a constant or an array, for
                                example. The programmer can then refer to those
                                items using their names (rather than the memory
                                addresses). Each programming language has its
                                own rules about what you can and can't use in a
                                name and you should make sure you know what the
                                rules are for the languages you are learning on
                                your course.
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Reserved words / keywords
                                  </span>
                                </strong>
                                <br />
                                Reserved words or keywords are words that the
                                programmer cannot use as identifiers because
                                they are used by the actual programming
                                language. For example, FOR and IF and INTEGER
                                are keywords in most languages and couldn't be
                                used as a variable name. All programming
                                languages have a list of reserved words.
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

export default Some_programming_terms;