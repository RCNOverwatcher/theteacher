import React from "react";

function Program_testing() {
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
                                Program testing
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                The aim of a good test plan is to try and find
                                bugs in a program. If a program can't be failed
                                and errors can't be found then the programmer
                                can be reasonably certain that the program
                                works. Writing test plans that prove a program
                                works is incredibly difficult. When programs are
                                thousands and thousands of lines of code long,
                                it is difficult to test every path through the
                                code, to ensure that every path through it works
                                as intended. Formal test strategies, however,
                                improve the chances of finding bugs.
                              </p>

                              <p>
                                <strong>
                                  White box testing (also known as 'glass box
                                  testing')
                                </strong>
                              </p>
                              <p>
                                <img
                                  src="images/d5fbf6c8-5753-4d4e-95ca-3a9e75d549efa.gif"
                                  alt
                                />
                              </p>
                              <p>
                                This kind of testing can be done either by the
                                programmers who wrote the code or some people
                                employed specifically to test software. This
                                type of testing is known as 'white box testing'
                                or 'glass box testing'. The test plan is based
                                upon the structure and design of the actual
                                code. The person who writes the test plan can
                                actually see the code. Consider this example to
                                calculate an exam mark comment. You have some
                                pseudo-code with lots of nested IF statements.
                              </p>
                              <p style="margin-left: 30px">
                                <strong>IF ITEM &lt; 100 THEN</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; PRINT "Poor
                                  mark"
                                </strong>
                                <br />
                                <strong>ELSE</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; IF ITEM
                                  &lt; 200 THEN
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp; &nbsp; &nbsp; PRINT "Could do
                                  better"
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ELSE
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp; &nbsp; &nbsp; IF ITEM &lt; 300
                                  THEN{" "}
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp; &nbsp; PRINT "GOOD"
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp; &nbsp; &nbsp; ELSE
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp; &nbsp; PRINT "Well done"
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  &nbsp; &nbsp; &nbsp; &nbsp; ENDIF
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ENDIF
                                </strong>
                                <br />
                                <strong>ENDIF</strong>
                              </p>
                              <p>
                                Because the tester can see this code they will
                                know that, to ensure they test every bit of the
                                code (every path through the code), they must
                                try:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>a value less than 100.</li>
                                    <li>
                                      a value greater than or equal to 100 but
                                      less than 200.
                                    </li>
                                    <li>
                                      a value greater than or equal to 200 but
                                      less than 300.
                                    </li>
                                    <li>
                                      a value greater than or equal to 300.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                They can, of course, only design the tests for
                                white box testing once the code has been
                                written! It’s possible for bugs to be discovered
                                in a program years after it was first used
                                because a particularly unusual path through the
                                code was not tested. It is almost impossible to
                                test every path in a big program, especially,
                                for example, when many nested IF statements are
                                used.
                              </p>
                              <p>
                                <strong>Black box testing</strong>
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    <img
                                      src="images/f88a9d4f-bf7f-46ef-8742-5d635fa80742b.gif"
                                      alt
                                    />
                                  </span>
                                </strong>
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 1.5">
                                  Black box testing is so described because the
                                  code is viewed as being inside a black box, or
                                  unreadable. The tester has no knowledge of the
                                  code. This kind of test plan should be written
                                  before the program is written. This is
                                  possible because you are not testing the code
                                  as such but testing to see if the program can
                                  do what it was written to do, as laid down in
                                  a Requirements Specification. The focus is on
                                  the functionality of the program. For this
                                  reason, the tests will be written so that data
                                  is inputted via the interfaces provided and
                                  the outputs observed to see if what was
                                  predicted would happen actually does happen.
                                </span>
                              </p>
                              <p>
                                Whether you are doing black box testing or white
                                box testing, a plan should use a range of data
                                to produce a range of results. The programmer
                                would:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>Decide what data to use.</li>
                                    <li>Decide why you will use that data.</li>
                                    <li>Predict the results.</li>
                                    <li>Carry out the test.</li>
                                    <li>
                                      Compare the prediction with the actual
                                      results and comment on whether the test
                                      passed or failed.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                When deciding what data to use, the programmer
                                would consider the following categories of input
                                data:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>Valid data.</li>
                                    <li>Invalid data.</li>
                                    <li>Extreme data.</li>
                                    <li>Mad data.</li>
                                    <li>
                                      Borderline data - bugs lurk in corners!
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                Valid data in the exam mark comment program on
                                the previous page might include, 34, 150 and
                                250, for example. Invalid data might include
                                -30. Extreme data might include 560444033. Mad
                                data would be of a completely different data
                                type, 'Gr', for example. Although no code is
                                shown in our program to cope with this invalid
                                data type of input, we would expect there to be
                                some in a real program. We would want to observe
                                an "invalid input" message if this case
                                occurred. Borderline data would include 99, 100,
                                101, 199, 200, 201, 299, 300 and 301, for
                                example, with observations of the correct output
                                in each case.
                              </p>
                              <p>
                                <strong>An example of black box testing</strong>
                                <br />
                                Suppose a subroutine has been written.
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      The program asks the user to enter in a
                                      test mark between 0 and 100 as an integer.
                                    </li>
                                    <li>It outputs a grade.</li>
                                    <li>
                                      A student must re-sit the test if they get
                                      less than 50.
                                    </li>
                                    <li>A pass is from 50 to 70 inclusive.</li>
                                    <li>
                                      A pass with honours is from 71 to 100
                                      inclusive.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                You have been given the subroutine by the
                                programmer to test. You do not have knowledge of
                                the actual code. You do, however, know what it
                                does because you have the Requirements
                                Specification. You might draw up the following
                                black box test plan, which also shows the
                                results of carrying out each test.
                              </p>
                              <p>
                                <img
                                  src="images/e5967318-d9dc-4908-a0b0-200d43d1f155blackbox.JPG"
                                  alt
                                />
                              </p>
                              <p>
                                When you completed the tests, you would pass the
                                results back to the programmer. They would need
                                to investigate why the test that used the data
                                49 failed - it did not produce the expected
                                outcome. They would then re-submit it to you for
                                re-testing.
                              </p>
                              <p>
                                <strong>Alpha testing</strong>
                                <br />
                                Software can be fully or partially written and
                                then tested using black box and white box
                                testing. Whether complete or only partially
                                complete, the code is passed to a restricted
                                audience within the company that produced the
                                software, possibly a Testing Department set up
                                for the purpose of testing software products.
                                They will use it and give feedback to the
                                programmers. They will report any faults they
                                find, make comments about the ease of use of the
                                software and suggest improvements, for example.
                                This kind of testing is known as ‘alpha
                                testing’. It is used to further improve a
                                product and to help track down bugs.
                              </p>
                              <p>
                                <strong>Beta testing</strong>
                                <br />
                                Once a product has been alpha tested, it can
                                then be improved and 'finished off'. It is
                                released to a limited audience in return for
                                their feedback. The audience might include
                                reviewers, special customers and people who
                                write textbooks about software products. This
                                information can be used to further improve the
                                quality of the final product before it is
                                finally released and sold as a finished program
                                to an awaiting public. This kind of testing is
                                known as ‘beta testing’.
                              </p>
                              <p>
                                <strong>Unit testing</strong>
                                <br />
                                Whenever a module of code (or subroutine, or
                                unit, or function, or procedure, or whatever
                                other name you want to give to the block of
                                self-contained code) is written, it needs to be
                                tested. Testing can be done using black or white
                                box testing, as discussed earlier. Whether you
                                use black box or white box testing, testing an
                                individual module of code is known as ‘unit
                                testing’.
                              </p>
                              <p>
                                <strong>Integration testing</strong>
                                <br />
                                Once modules of code are tested using unit
                                testing, they need to be combined and tested
                                together. It is possible that two fully tested
                                modules (tested individually using unit testing)
                                will produce a problem when they are combined
                                and asked to work together. Bringing modules
                                together and checking that there are no
                                unintentional problems is known as ‘integration
                                testing’.
                              </p>
                              <p>
                                <strong>Identifying programming errors</strong>
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
                              <p>
                                <strong>Translator diagnostics</strong>
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
                              <p>
                                <strong>Dry run</strong>
                                <br />A section of a program that a programmer
                                suspects of having an error might be 'dry run'.
                                This involves the programmer copying out a list
                                of instructions from the program into a table on
                                paper. This table is known as a ‘trace table’.
                                The programmer then adds columns for any
                                variables that are important for this part of
                                the code. When this has been done, the
                                programmer works through the program on paper,
                                line by line, filling into the trace table the
                                values of variables as they change. By doing
                                this, the programmer can spot the exact position
                                when things start going wrong with the program -
                                when variables suddenly contain unexpected
                                values. Trace tables can be done on computer but
                                it is more usual to do it on paper by hand -
                                programmers seem to be able to find problems
                                more efficiently this way.
                              </p>
                              <p>
                                <strong>Watch and Trace</strong>
                                <br />
                                It is possible for a programmer to tell the
                                computer to display (or 'watch') certain
                                variables in a program. The programmer can then
                                step through the program line-by-line (or
                                'trace' through the program) watching the
                                variables as they change. This is a little like
                                doing a dry run on paper. This tool, however, is
                                very powerful when used with the breakpoint tool
                                described below. 
                              </p>
                              <p>
                                <strong>Breakpoints</strong>
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
                              <p>
                                <strong>Cross-referencing</strong>
                                <br />
                                This debugging tool identifies every place that
                                a particular variable occurs. This is useful,
                                because it allows the programmer to check that
                                each variable has been named correctly and that
                                one variable name hasn't been used for two
                                different things.
                              </p>
                              <p>
                                <strong>Bottom-up testing</strong>
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
                                While a problem is designed using a top-down
                                approach, testing is done using a bottom-up
                                approach. This makes it easier to find faults.
                                It is easier to find faults in lots of smaller
                                blocks of code and then recombine them than
                                trying to find bugs in one big block of code.
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

export default Program_testing;