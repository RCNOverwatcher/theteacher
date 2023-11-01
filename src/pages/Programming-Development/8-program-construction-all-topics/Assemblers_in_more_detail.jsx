import React from "react";

function Assemblers_in_more_detail() {
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
                                Assemblers in more detail
                              </h1>
                              <p>
                                <span class="NormalContentHeading">
                                  <strong>
                                    Understanding assembly, machine code and
                                    assemblers
                                  </strong>
                                  <br />{" "}
                                </span>
                                In the Resources part of the web site (click on
                                the
                                <strong>
                                  <em>FAQ and Resources</em>
                                </strong>{" "}
                                link at the top of the page) you will find links
                                in the Resources area to some excellent
                                simulations, such as the Little Man computer and
                                SimCom. It is a lot of fun writing your own
                                programs for these and you will begin to{" "}
                                <em>really</em> understand how programming (the
                                software) works with the CPU, RAM and the
                                registers (the hardware).
                              </p>

                              <p>
                                <strong class="NormalContentHeading">
                                  High-level languages
                                </strong>
                                <br />
                                People write programs in programming languages!
                                There are many different languages, and many
                                different ways of classifying, or grouping
                                together, languages. You will have been learning
                                a language on the course. You might be learning
                                Visual Basic, or Pascal, or Java, for example.
                                Below is an example of a short Java program. Can
                                you work out what it does?
                              </p>
                              <p
                                class="NormalContentHeading"
                                style="margin-left: 30px"
                              >
                                <strong>//My first program</strong>
                                <br />
                                <strong>public class Hello</strong>
                                <br />
                                <strong> </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; public static
                                  void main(String[] args)
                                </strong>
                                <br />
                                <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  System.out.println("Hello World");
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  EasyIn.pause();
                                </strong>
                                <br />
                                <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>
                                <br />
                                <strong> </strong>
                                <br />
                                <strong>//This is the end</strong>
                              </p>
                              <p>
                                Java, Visual Basic, Pascal and so on are
                                examples of a group of languages known as
                                ‘high-level languages’. These are languages that
                                use ‘keywords’ in programs, words that are very
                                close to English. These types of languages also
                                refer to memory locations using variable names
                                rather than their actual addresses in RAM. For
                                these reasons, high-level languages are easier
                                to learn than low-level languages. They can also
                                be more easily ‘read’ and so are easier to
                                debug. These kinds of languages, because they
                                are written using keywords, must be changed (or
                                ‘translated’) into a form that the Central
                                Processing Unit can understand (known as
                                ‘machine code’) before they can be run. A
                                computer does not ‘understand’ the word PRINT.
                                It does, however, know how to make the hardware
                                print something out if it receives the machine
                                code instruction for the keyword PRINT. The
                                machine code equivalent of PRINT might look like
                                this: 00010101 00001001 01110010 11110101
                                01110010.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Low-level languages
                                </strong>
                                <br />
                                Low-level languages do not use keywords such as
                                'print', 'pause', 'if' 'while' and so on. They
                                use
                                <strong>mnemonics</strong>. These are codes for
                                instructions, such as DEC (short for
                                ‘decrement’) or LD (short for ‘load’). Mnemonics
                                are designed to be easily remembered (hence the
                                word 'mnemonic'). An example of a short
                                low-level program using mnemonics is shown
                                below.
                              </p>
                              <p
                                class="NormalContentHeading"
                                style="margin-left: 30px"
                              >
                                <strong>ADD (#344A)</strong>
                                <br />
                                <strong>DEC IY</strong>
                                <br />
                                <strong> CALL PAGE</strong>
                                <br />
                                <strong>LD B, #1195</strong>
                              </p>
                              <p>
                                Low-level languages are much closer to the
                                workings of a computer. Often, control programs
                                that require very fast execution speeds are
                                written in a low-level language, known as
                                <strong>assembly</strong>. This is because when
                                they are converted into machine code (using an
                                <strong>assembler</strong>), they produce less
                                machine code than if the equivalent program was
                                written in a high-level language. They therefore
                                run faster! There are also applications that
                                require you to manipulate a computer's hardware
                                in a way that is difficult to do with high-level
                                languages. For example, a programmer might use a
                                low-level language to write a print driver for a
                                new printer and a high-level language to write a
                                sales program that calculates salesmen's
                                commissions.
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li>
                                      High-level languages are designed to allow
                                      a programmer to solve real-world problems.
                                    </li>
                                    <li>
                                      Low-level languages are designed to allow
                                      a programmer to manipulate a computer's
                                      hardware. In fact, they are sometimes
                                      known as ‘machine-orientated languages’.
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p>
                                Low-level languages, while quite difficult to
                                learn compared to the newer high-level
                                languages, are a big improvement on what went on
                                before. Programmers had to write in the code
                                that the computer could actually work with and
                                use! Below is an example of part of a machine
                                code program. Imagine writing programs in ones
                                and zeros!!
                              </p>
                              <p
                                class="NormalContentHeading"
                                style="margin-left: 30px"
                              >
                                <strong>0100 1010 0000 1101</strong>
                                <br />
                                <strong>0000 1011 0111 0111</strong>
                                <br />
                                <strong> 0011 1111 0010 1000</strong>
                              </p>
                              <p>
                                You can get some information about different
                                ways of addressing in low level languages in
                                3.3.8.
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

export default Assemblers_in_more_detail;
