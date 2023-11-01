import React from "react";

function Debugging_tools() {
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
                                Debugging tools
                              </h1>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Identifying programming errors
                                </strong>
                                <br />
                                Once an error in a program has been discovered,
                                whether it is a syntax error, a logical error or
                                a run-time error, whether it has been discovered
                                during white box testing, black box testing,
                                alpha testing or beta testing, the program needs
                                to be debugged! This can sometimes be easier
                                said than done. Fortunately, there are tools to
                                help! Programming languages usually come with
                                debugging programs. These are software tools for
                                the programmer to use to help find bugs.
                              </p>

                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Translator diagnostics
                                </strong>
                                <br />
                                When some source code is translated, what
                                actually happens is that the source code is
                                passed over to a program called a 'translator'.
                                The translator checks each line in turn against
                                the rules of the language. You will know from
                                experience that programming instructions using
                                keywords must be written in exactly the correct
                                way. If there is any deviation from the rules in
                                the way an instruction is constructed then an
                                error will be reported. This is known as a
                                syntax error. An appropriate error message would
                                be displayed on the screen and the location of
                                the error in the program would be highlighted.
                                Unfortunately, the exact position of the error
                                is not always obvious from the information given
                                by the translator diagnostics program and the
                                error messages given can be rather cryptic
                                sometimes. Translator diagnostics do, however,
                                help a programmer locate syntax errors in a
                                program.
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 1.5">
                                  <strong>Watch and trace</strong>
                                  <br />
                                  It is possible for a programmer to tell the
                                  computer to display (or 'watch') certain
                                  variables in a program. The programmer can
                                  then step through the program line-by-line (or
                                  'trace' through the program) watching the
                                  variables as they change. This is a little
                                  like doing a dry run on paper. This tool,
                                  however, is very powerful when used with the
                                  breakpoint tool described below.
                                </span>
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Breakpoints
                                </strong>
                                <br />
                                Consider a program that has 10000 thousand of
                                lines of code. A programmer trying to track down
                                a fault is confident that the first 8000 lines
                                are fine but suspects the problem lies somewhere
                                after line 8000. They can set a 'breakpoint' at
                                line 8000 and then run the program. The program
                                will run from the beginning of the program right
                                up to line 8000 and will then stop. At that
                                point, the programmer can then examine the
                                contents of the variables they have told the
                                computer to 'watch'. When they have done that
                                they will either have spotted the problem and
                                will set about correcting it or they will set
                                the program running to the next breakpoint. They
                                could also 'watch and trace' from that
                                breakpoint.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Cross-referencing
                                </strong>
                                <br />
                                This debugging tool identifies every place that
                                a particular variable occurs. This is useful,
                                because it allows the programmer to check that
                                each variable has been named correctly and that
                                one variable name hasn't been used for two
                                different things.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Bottom-up testing
                                </strong>
                                <br />
                                When programs are designed using the top-down
                                approach, it means that a big problem is split
                                up into lots of smaller problems and a program,
                                or ‘module’, is then written for each problem.
                                Each of the modules produced should ideally
                                perform one task. When a program is being
                                tested, the smaller modules are each tested
                                individually first. They are then combined with
                                other modules and they are tested together.
                                These are then combined with even more modules,
                                and tested, until the whole program has
                                effectively been rebuilt and completely tested.
                              </p>
                              <p class="NormalContent">
                                While a problem is designed using a top-down
                                approach, testing is done using a bottom-up
                                approach. This makes it easier to find faults.
                                It is easier to find faults in lots of smaller
                                blocks of code and then recombine them than
                                trying to find bugs in one big block of code.
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/d19c14f1-b35d-4816-ba9e-ff5577a53dc1a.gif"
                                  alt
                                />
                                <br />
                                <br />
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

export default Debugging_tools;
