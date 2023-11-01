import React from "react";

function More_on_programming_paradigms() {
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
                                More on programming paradigms
                              </h1>
                              <p>
                                <strong class="NormalContentHeading">
                                  The terms procedural, declarative and OOP
                                </strong>
                                <br />
                                <span class="NormalContent">
                                  Languages can also be classified according to
                                  their type as well as their generation. We
                                  will consider a range of paradigms below.
                                </span>
                              </p>

                              <p>
                                <img
                                  style="margin: 20px; float: right"
                                  src="images/1100ef60-f44e-491a-8ba8-b8a6054c9a80scratch.GIF"
                                  alt="scratch"
                                  width="400"
                                  height="332"
                                />
                                There are a number of important programming
                                paradigms to consider. These include:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>Procedural languages</li>
                                    <li>Declarative languages</li>
                                    <li>Object oriented languages</li>
                                    <li>Functional languages</li>
                                    <li>Mark-up languages&nbsp;</li>
                                    <li>Visual programming languages</li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong class="NormalContentHeading">
                                  Procedural languages (also known as Imperative
                                  languages)
                                </strong>
                                <br />
                                With these kinds of languages, you must tell the
                                computer exactly what to do, instruction by
                                instruction, in the same way that Von Neumann
                                processors work through programs, instruction by
                                instruction. You will see later that this is not
                                the only way to write a program! This type of
                                language has its roots firmly in the design of
                                computers, digital technology and the Von
                                Neumann processor. The computer will start at
                                the first instruction, carry out the command and
                                then move on to the next one. The programmer
                                writes programs and controls program flow by
                                using only three basic building blocks:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">Sequence.</li>
                                    <li class="NormalContent">Selection.</li>
                                    <li class="NormalContent">Iteration.</li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                In Pascal, conditional branching (selecting
                                which code to do) is possible using the IF
                                statement and the CASE statement. Iteration is
                                possible using FOR, WHILE and REPEAT. Procedural
                                languages also make heavy use of functions and
                                procedures, which are the main building blocks
                                of programs - problems are generally broken
                                down, simplified, understood and organised in
                                terms of these structures, a process known as
                                'abstraction'. This promotes modular
                                programming, which allows code to be reused,
                                better understood and better designed amongst
                                other benefits. Once a procedure or function has
                                been written, it can be called using a single
                                command. This approach isn't perfect, however,
                                because the variables that are used within
                                procedures and functions can always be
                                accidentally changed elsewhere in the program
                                and finding these kinds of bugs can be very
                                difficult and time-consuming!
                              </p>
                              <p>
                                PASCAL was written as a teaching language, to
                                teach the elements of structured programming and
                                BASIC was used for the same purpose for many
                                years (and still is). COBOL has commands that
                                make it excellent at data processing
                                applications. FORTRAN focuses on scientific and
                                engineering applications and so on. Other
                                procedural languages have also been written.
                                Each one provides the programmer with the
                                instructions and facilities that enable programs
                                for particular application areas to be written.
                              </p>
                              <p>
                                <strong>Declarative languages</strong>
                                <br />
                                We will introduce declarative languages here.
                                There is a chapter later that shows some
                                examples using PROLOG.
                              </p>
                              <p>
                                A declarative language is very different from a
                                procedural one. It is written in a completely
                                different way. With procedural languages, you
                                have to tell the computer exactly what to do,
                                step-by-step. With declarative languages, you
                                don't. You write a program by stating facts and
                                relationships between facts. Then you ask the
                                program questions. You don't state how to find
                                information, only what information you want. In
                                other words:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      You tell the computer facts and how those
                                      facts relate to each other.
                                    </li>
                                    <li class="NormalContent">
                                      Running a program involves you stating a
                                      goal and letting the language work out
                                      whether the goal can be achieved or not by
                                      looking at the facts and their
                                      relationships.
                                    </li>
                                    <li class="NormalContent">
                                      The order of statements is really
                                      important in procedural languages such as
                                      Pascal. They are not at all important in
                                      declarative languages.
                                    </li>
                                    <li class="NormalContent">
                                      The route through a program needs to be
                                      carefully thought through with procedural
                                      languages. In declarative languages, the
                                      program works through a route of facts as
                                      it finds them. If it comes up against a
                                      dead-end, it backtracks and tries a
                                      different route, until it achieves the
                                      goal you set it, or it can't achieve the
                                      goal at all.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                Declarative languages are suited to artificial
                                intelligence applications. Programs can be
                                written to suggest illnesses from symptoms or to
                                produce probable minerals present in a
                                particular environment, for example.
                              </p>
                              <div>
                                <p>
                                  <strong
                                    class="NormalContentHeading"
                                    style="line-height: 1.5"
                                  >
                                    Object-oriented languages
                                    <br />
                                  </strong>
                                  <span style="line-height: 1.5">
                                    Good programming using a procedural language
                                    will employ a modular approach. There are
                                    many good reasons for this. One of them is
                                    that procedures and functions can be written
                                    which can then be stored in a library and
                                    used in other programs. That will save time
                                    and money developing future programs.
                                    Unfortunately, problems can still arise when
                                    you try to use library modules. Variables
                                    used in a module, for example, may get
                                    changed in an unexpected way by a program,
                                    or vice versa. This may cause a bug and if
                                    it does, they can be very hard indeed to
                                    find.
                                  </span>
                                </p>
                              </div>
                              <p>
                                A different way of programming is the
                                object-oriented approach. In this kind of
                                paradigm, objects are defined. An object is a
                                real-world thing. It might be a car, a person or
                                a command button in Visual Basic. The
                                programmer, before writing the program, asks:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      What objects exist in the problem area?
                                    </li>
                                    <li class="NormalContent">
                                      What events can happen to those objects?
                                    </li>
                                    <li class="NormalContent">
                                      What should happen, the methods, when a
                                      particular event occurs?
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                The data needed to define an object, the things
                                that can happen to that object (events) and the
                                actions that need to take place when a
                                particular event occurs (methods) are bound
                                together (called encapsulation). Once an object
                                has been encapsulated, it cannot fail as a
                                result of the actions of other parts of the
                                program, as procedural programs can.
                              </p>
                              <p>
                                OOP is conceptually much closer to the real
                                world than procedural programming. It is much
                                easier to think about what objects there are in
                                a program and what might happen to an object
                                than to try to break down a problem into modules
                                and then write down a sequence of instructions
                                that work through the modules. A later chapter
                                deals with the concepts behind OOP in much more
                                detail.
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Functional languages
                                  </span>
                                </strong>
                                <br />
                                Functional paradigms originate from a pure Maths
                                discipline and the theory of functions, as
                                opposed to imperative languages, which are
                                rooted in the design of digital computers and
                                the Von Neumann computer. All computations are
                                carried out by calling functions and each
                                function can be evaluated as an
                                expression.&nbsp;
                              </p>
                              <p class="NormalContent">
                                You may want to investigate functional
                                languages. You could start
                                <a
                                  href="http://www.haskell.org/hugs/"
                                  target="_blank"
                                >
                                  here
                                </a>
                                .
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  Mark-up languages
                                  <br />
                                </strong>
                                HTML (HyperText Markup Language) and CSS
                                (Cascading Style Sheets) are two of the main
                                tools for designing and and displaying websites
                                and web pages. If they are combined with a
                                client-side processing language like JavaScript
                                to add dynamic and interactive content, then
                                websites can be built that are clear, memorable,
                                useful, informative, accessible, organised and
                                maintainable. We have summarised the key points
                                here but there is another article in this
                                section that deals with HTML in more detail.
                              </p>
                              <p
                                class="NormalContent"
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <strong>
                                  HTML (HyperText Markup Language)
                                  <br />
                                </strong>
                                A typical web page&nbsp;might contain text,
                                pictures, animation, movies and sound and
                                collectively, they are known as
                                multimedia.&nbsp;HTML is a computer language
                                whose purpose is to create multimedia pages on a
                                computer. The first page of a web site is called
                                the 'homepage'. Its file name is usually always
                                either index.html or index.htm and this is the
                                special file a server looks for first when you
                                request a web page. HTML is a mark-up language.
                                It is written as a script - a sequence of
                                instructions called tags that tell a web browser
                                how to display something. It is not a
                                programming language as such - it doesn't use
                                programming constructs such as SEQUENCE,
                                SELECTION and ITERATION. However, it is possible
                                to 'embed' a program written in e.g. JavaScript
                                into an HTML page to add some interactive
                                capabilities or add dynamic data.
                              </p>
                              <p
                                class="NormalContent"
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <strong style="line-height: 1.5">
                                  CSS (Cascading Style Sheets)&nbsp;
                                  <br />
                                </strong>
                                <span style="line-height: 16.3636360168457px">
                                  The content of a web page and the instructions
                                  that tell the browser how to layout the
                                  content are divorced in well written websites.
                                  This is achieved by writing two files for a
                                  web page. The first file, called a Cascading
                                  Style Sheet, or CSS file, holds the layout
                                  instructions that tells a web browser how to
                                  layout any information on the web page. It
                                  deals with actual layout, the fonts to use,
                                  the size of the fonts, the colours to use, how
                                  to lay out tables, pictures and so on. The
                                  second file is the HTML file. This file
                                  contains only the content you want to display
                                  on a web page. You can set up many different
                                  'style sheets' and use them at any time for
                                  any of your web pages. For example, you might
                                  have some tags in a style sheet that say
                                  "Display all headings in size 1, underlined
                                  and red". If this style sheet is applied to a
                                  web page then whenever it comes across a piece
                                  of information that's a title, it formats it
                                  according to the style sheet’s instructions.
                                  Style sheets in HTML are very useful. Imagine,
                                  for example, you have written 100 pages of
                                  information, each with a green page
                                  background. If you changed your mind and
                                  wanted a blue background, you would only need
                                  to change one page, the style sheet, instead
                                  of 100 individual pages! &nbsp;
                                </span>
                              </p>
                              <p
                                class="NormalContent"
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <span style="line-height: 16.3636360168457px">
                                  <strong>Visual programming languages</strong>
                                  <br />
                                  Any programming language that allows you to
                                  create programs by selecting visual blocks and
                                  building programs by combining them can be
                                  called a visual programming language. Most
                                  students these days have used a visual
                                  programming language. These include:
                                </span>
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>Scratch, to make powerful games</li>
                                    <li>
                                      App Inventor, to write mobile phone apps
                                    </li>
                                    <li>
                                      Logicator, to write control programs
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                These types of languages are very accessible so
                                make them ideal to use in educational settings
                                and to build up skills towards more text-based
                                languages. Because they use graphical elements,
                                it is much harder to get the syntax incorrect
                                (the syntax means the rules of a programming
                                language, which will cause an error if
                                broken).&nbsp;
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

export default More_on_programming_paradigms;