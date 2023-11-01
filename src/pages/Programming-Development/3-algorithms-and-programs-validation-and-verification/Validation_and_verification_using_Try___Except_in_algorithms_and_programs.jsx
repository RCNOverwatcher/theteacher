import React from "react";

function Validation_and_verification_using_Try___Except_in_algorithms_and_programs() {
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
                                Validation and verification using Try - Except
                                in algorithms and programs
                              </h1>
                              <p>
                                <strong style="line-height: 1.5">
                                  Data validation
                                  <br />
                                </strong>
                                There are a number of ways a programmer can
                                validate data input in their algorithms and
                                programs.&nbsp;
                              </p>

                              <p>
                                Many languages have special routines built into
                                them to catch rogue data entry values. These are
                                called 'exceptions'. Python for example, has a
                                number of built-in instructions it can use to
                                look for specific exceptions. For example, you
                                could use one of these to make sure the user
                                enters in only numbers and not letters. If a
                                user enters in a letter when a number was
                                expected, then an 'exception handling routine'
                                is run to deal with the error. The general
                                format for looking for an exception in Python
                                is:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>try</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; do these instructions if there
                                  are no exceptions
                                  <br />
                                  <strong style="line-height: 16.3636360168457px">
                                    &nbsp; &nbsp; ....
                                  </strong>
                                </strong>
                                <br />
                                <strong>except XXXX</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; do these instructions if there
                                  is a problem with the input
                                  <br />
                                </strong>
                                <strong style="line-height: 16.3636360168457px">
                                  &nbsp; &nbsp; ....
                                </strong>
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  Note, however, that there are some variations.
                                  Here is an example of it being used. In this
                                  program, a number has to be entered. If a
                                  letter is entered, then an exception handling
                                  routine deals with it.
                                </span>
                              </p>
                              <p>
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/b8fc0653-bc94-494d-af7e-316ce9393476oo1.GIF"
                                  alt="oo1"
                                />
                              </p>
                              <p>
                                <strong>Using try - except</strong>
                                <br />
                                There are a lot of different types of exception
                                you can look for. You have to look up what is
                                available in whatever language you are using and
                                read the descriptions for them. In Python, you
                                can get
                                <a
                                  href="https://docs.python.org/3/library/exceptions.html"
                                  target="_blank"
                                >
                                  a full list in the documentation here
                                </a>
                                . They include ValueError, ZeroDivisionError,
                                TypeError, OverflowError and many more.
                              </p>
                              <p>
                                You can lots of practice trying out some of the
                                different types of error in
                                <a
                                  href="/index.php/python-3/errors-and-bugs"
                                  target="_blank"
                                >
                                  our Python course here
                                </a>
                                .
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

export default Validation_and_verification_using_Try___Except_in_algorithms_and_programs;