import React from "react";

function Procedural_languages() {
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
                                Procedural languages
                              </h1>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Introduction
                                  <br />
                                </strong>
                                Procedural languages are sometimes called
                                'imperative' languages. This comes from English
                                grammar! The imperative form of a verb is where
                                you give a command. For example, in the verb 'to
                                stand', the imperative form of the verb is
                                'Stand'. It's a command to tell someone to stand
                                up. An imperative language is therefore one
                                where the instructions in the language are
                                simply commands that tell the program exactly
                                what to do next.
                              </p>
                              <p class="NormalContent">
                                Compare an imperative language with an example a
                                fourth generation language, such as SQL:
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>CREATE table Dogs</strong>
                                <br />
                                <strong>SELECT * FROM Dogs</strong>
                              </p>
                              <p class="NormalContent">
                                This tells the program to create a table called
                                Dogs and then select all the pieces of
                                information in the table. What it doesn't do is
                                what a procedural language would have to do; it
                                doesn't say how you create the table and how you
                                are going to read all the contents from the
                                table and where you are going to store the data
                                whilst you are using it.
                              </p>

                              <p class="NormalContent">
                                <strong>
                                  Characteristics of a procedural language
                                </strong>
                                <br />
                                These types of languages are third generation
                                languages and examples include BASIC and Pascal.
                                Programs are laid out using three control
                                structures. These are sequence, selection and
                                iteration (repetition). In addition, programs
                                are typically broken down into logical blocks,
                                each of which carries out one task. These are
                                known by a variety of names, including function,
                                procedure, subroutine, module and unit. Programs
                                make use of variable names, which are just real
                                words that describe memory locations holding
                                data. Whilst it might not seem that important,
                                it actually makes the whole program much easier
                                to read, understand and importantly, debug (find
                                any errors in the code).
                              </p>
                              <p class="NormalContent">
                                <strong
                                  class="NormalContentHeading"
                                  style="line-height: 1.5"
                                >
                                  Control structures
                                  <br />
                                </strong>
                                When you look at any high-level language, you
                                can identify the features in the language that
                                make it so powerful. Instructions in a program
                                flow one after another in a sequence. However,
                                there are instructions available that will allow
                                blocks of code to be repeated many times. There
                                are also instructions that allow decisions to be
                                made about which code from a selection of code
                                will be executed. The specific instructions
                                provided by a particular language that allow
                                code to be repeated, or code to be selected from
                                a choice of code, are known as{" "}
                                <strong>control structures</strong>. If we also
                                include the way that instructions flow one after
                                the other, we can say that there are three types
                                of programming construct we need to know about.
                                These we will call:
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li class="NormalContent">
                                      <strong>Sequence.</strong>
                                    </li>
                                    <li class="NormalContent">
                                      <strong>Selection. </strong>
                                    </li>
                                    <li class="NormalContent">
                                      <strong>Iteration</strong>, also called
                                      <strong>repetition</strong>.&nbsp;
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Sequence
                                </strong>
                                <br />
                                There isn't a lot to say about the programming
                                construction 'sequence'. It simply describes one
                                instruction following on from the next
                                instruction. An example of this, in pseudo-code,
                                is:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>INITIALISE Variables</strong>
                                <br />
                                <strong>
                                  WRITE ‘Please enter the name of student’
                                </strong>
                                <br />
                                <strong> INPUT Name</strong>
                                <br />
                                <strong>
                                  WRITE ‘Please enter the exam mark of student’
                                </strong>
                                <br />
                                <strong> INPUT ExamMark</strong>
                                <br />
                                <strong> PRINT Name, ExamMark</strong>
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Selection
                                  </span>
                                </strong>
                                <br />A selection construct looks at some data
                                held in a variable and tests it. If the result
                                of the test is TRUE, we do one block of code. If
                                the result of the test is FALSE, we do a
                                different block of code. In this way, we can
                                alter the program flow and execution. Some
                                blocks of code may never get executed at all
                                whilst others will get executed.&nbsp;
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Iteration
                                  </span>
                                </strong>
                                <br />
                                Iterative constructs (also known as repetitive
                                constructs) repeat the same block of code a
                                number of times. Sometimes, an iterative
                                instruction will say how many times a particular
                                block of code should be repeated. Other types of
                                iterative instructions will tell a program to
                                repeat a block of code constantly, but before
                                the code is run again, a test is carried out.
                                The code is run only if the test result is TRUE.
                                Eventually, the test returns a FALSE and the
                                block of code isn't done any more.
                              </p>
                              <p class="NormalContent" style="margin-top: 10px">
                                <strong>BASIC for Windows</strong>
                                <br />
                                You can quickly get some experience writing
                                procedural programs in BASIC. You will need to
                                download and set-up BASIC on your computer here:
                              </p>
                              <p class="NormalContent">
                                <a href="http://www.bbcbasic.co.uk/bbcwin/download.html">
                                  http://www.bbcbasic.co.uk/bbcwin/download.html
                                </a>
                              </p>
                              <p class="NormalContent">
                                and then work through the outstanding Beginners'
                                Tutorial here:
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-bottom: 10px"
                              >
                                <a href="http://www.bbcbasic.co.uk/bbcwin/tutorial/index.html">
                                  http://www.bbcbasic.co.uk/bbcwin/tutorial/index.html
                                </a>
                                <a href="http://www.bbcbasic.co.uk/bbcwin/tutorial/index.html"></a>
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-bottom: 10px"
                              >
                                It can take just a few hours to get a really
                                good idea of what procedural programming is all
                                about and to start to use and understand the
                                features and structures that underpin this kind
                                of language.
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

export default Procedural_languages;
