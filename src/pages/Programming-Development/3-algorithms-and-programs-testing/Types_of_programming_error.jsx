import React from "react";

function Types_of_programming_error() {
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
                                Types of programming error
                              </h1>
                              <p>
                                <strong>Programming errors</strong>
                                <br />
                                When a programmer writes a program, errors are
                                sometimes made in the code. Finding errors, or
                                ‘bugs’, in a program is known as ‘debugging’ a
                                program. Errors can be classified under the
                                three headings.
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li>Syntax errors.</li>
                                    <li>Logical errors.</li>
                                    <li>Run-time errors.</li>
                                  </ol>
                                </li>
                              </ol>
                              <p>
                                These classifications come about because the
                                first type of error should be picked up by your
                                translator's diagnostics. In other words, when
                                you try to translate your program from source
                                code to object code. The second type of error
                                can be translated successfully and won't
                                actually cause your computer to display an error
                                at all. It's up to the programmer to find these.
                                The third type of error again can be translated
                                but this time will throw up an error when the
                                object code is run.
                              </p>
                              <p>
                                <strong>1. Syntax errors</strong>
                                <br />
                                Every program has its own set of rules regarding
                                the instructions that can be used and the way
                                that each instruction must be constructed. If a
                                programmer were to break one of those rules, the
                                program would not be translatable into object
                                code. For example, look at the following Python
                                program:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>Print(“Hello world”)</strong>
                              </p>
                              <p>
                                If we tried to translate this program into
                                object code, our translator program would
                                diagnose a syntax error because the rules of
                                Python haven't been strictly followed. The
                                keyword Print starts with a capital letter.
                                Python’s keywords are case sensitive. Print
                                should have started with a small letter p.
                              </p>
                              <p>
                                <strong>2. Logical errors</strong>
                                <br />
                                When a programmer has written a program that
                                contains logical errors, it can be translated
                                and run. However, the program will produce
                                incorrect results or displays. For example,
                                suppose you had a program line that multiplied
                                two numbers:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>Result = valueA + valueB</strong>
                              </p>
                              <p>
                                This would be translated into object code
                                correctly. When the executable code is run,
                                however, it would produce an incorrect result.
                                This is because the + was used instead of the
                                multiplication symbol. It is up to the
                                programmer to discover these types of bugs by
                                writing a very good test plan to pick them up.
                                If the test plan isn't comprehensive, then the
                                programmer will think that they have written a
                                good program but it will be flawed!
                              </p>
                              <p>
                                <strong>
                                  3. Run-time errors and arithmetic errors
                                </strong>
                                <br />
                                As with logical errors, a program with these
                                types of errors can be translated without an
                                error being discovered. Unlike logical errors,
                                however, the program will stop running and a
                                run-time error will be displayed. A typical
                                example of a run-time error is when a division
                                by zero occurs in a calculation. Dividing by
                                zero is a meaningless calculation. Impossible
                                arithmetic operations that result in errors are
                                also called arithmetic errors. Another run-time
                                error would occur when a program has run out of
                                memory. There is a fixed amount of RAM in any
                                computer. Some of it will be used for the
                                operating system and the rest will be used for
                                applications and data files currently needed by
                                the CPU. If the CPU can’t run a program because
                                there is not enough memory available to store
                                temporary values, for example, then it will
                                display a run-time error message and stop
                                working.
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

export default Types_of_programming_error;
