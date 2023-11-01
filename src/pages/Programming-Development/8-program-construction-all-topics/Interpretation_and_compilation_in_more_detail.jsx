import React from "react";

function Interpretation_and_compilation_in_more_detail() {
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
                                Interpretation and compilation in more detail
                              </h1>
                              <p>
                                <strong class="NormalContentHeading">
                                  Introduction
                                </strong>
                                <br />
                                Programmers write programs in source code. This
                                might be using BASIC or Pascal or C++ or Visual
                                Basic, for example. However, this code cannot be
                                executed directly on a computer. First, the
                                source code must be translated into a form that
                                the computer can understand. This can be done
                                using interpreters and compilers.
                              </p>

                              <p>
                                <strong class="NormalContentHeading">
                                  Compilers and interpreters
                                </strong>
                                <br />
                                This type of translator takes the whole source
                                code and compiles it into object code. The
                                object code (sometimes called machine code) can
                                then be run. Pascal is an example of a
                                programming language that uses compilation. An
                                Interpreter on the other hand takes the source
                                code and translates the first line of the
                                program and then executes it. It then does the
                                second line, and the third line, until it gets
                                to the end of the code. BASIC, LISP, PROLOG and
                                APL are programming languages that use
                                interpretation.
                              </p>
                              <p>
                                <strong>
                                  Compilation and interpretation compared
                                </strong>
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      Compilation is much faster than
                                      interpretation. Once the compilation
                                      process has been completed, the object
                                      code will run faster than the same
                                      interpreted code. And you only have to
                                      compile the code once.
                                    </li>
                                    <li>
                                      Object code does not need the compiler to
                                      actually run it, only to convert it from
                                      source code to object code. Therefore, the
                                      object code produced by a compiler can be
                                      distributed to other computers without the
                                      compiler. You could write a program and
                                      then sell the object code on CD to anyone
                                      who wants to run the application.
                                    </li>
                                    <li>
                                      Object code is difficult to 'read' so that
                                      it can be distributed without actually
                                      revealing the code. This helps protect
                                      your intellectual rights.
                                    </li>
                                    <li>
                                      Source code can be compiled in sections to
                                      produce object code in sections. You can't
                                      do this with interpreters. If you have a
                                      lack of free space in RAM, compilation may
                                      be more useful.
                                    </li>
                                    <li>
                                      If there is an error in interpretation,
                                      the program will run successfully up to
                                      the point where the error occurs. Then it
                                      will stop. All of the variables are
                                      available for inspection at that point.
                                      Once the error has been corrected, the
                                      program doesn’t need to be recompiled -
                                      it’s just run again using the interpreter.
                                      Because of this, debugging and program
                                      development are easier and quicker using
                                      interpretation compared to compilation.
                                    </li>
                                    <li>
                                      Interpreters are far simpler to write than
                                      compilers. This is why JAVA works -
                                      because it is a relatively easy job to
                                      write an interpreter for a particular
                                      computer or application compared to
                                      writing a compiler for the machine.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong class="NormalContentHeading">
                                  How is source code actually translated?
                                </strong>
                                <br />A translator's job is to turn source code
                                into object code. It must be able to translate
                                good code that follows all the rules of the
                                programming language as well as signal problems
                                with bad code. There are three distinct steps to
                                producing object code:&nbsp; lexical analysis,
                                syntactic analysis and code generation.
                              </p>
                              <p align="center">
                                <img
                                  src="images/7c4bc24a-3422-418e-a858-d58f619dfc66a.gif"
                                  alt="int_v_comp"
                                />
                              </p>
                              <p>
                                During the lexical and syntactical analysis
                                stages, any code that cannot be analysed will be
                                passed to the error analyser software routine.
                                If errors are found, the report generator will
                                display error messages and object code will not
                                be produced. If the code produced by the lexical
                                and syntactical analysis stages produce no
                                errors, then the object code is generated and
                                the report generator will say as much. It will
                                report on other details, such as how much space
                                the object code takes up in memory.
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

export default Interpretation_and_compilation_in_more_detail;
