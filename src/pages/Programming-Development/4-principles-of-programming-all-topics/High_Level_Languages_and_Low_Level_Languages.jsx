import React from "react";

function High_Level_Languages_and_Low_Level_Languages() {
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
                                High Level Languages and Low Level Languages
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                Computers use digital signals to work but humans
                                don't think and work in 'digital'. We use words
                                and sentences to express meaning. The question
                                here is, 'how can a computer, which is digital,
                                be programmed to do useful things by a human,
                                who is not digital'?
                              </p>

                              <p>
                                <strong>Bits and bytes</strong>
                                <br />
                                Computers use digital signals. What this
                                actually means is that the electronic chips
                                inside any computer work by using just two
                                different voltage levels. We humans can
                                represent these voltage levels simply by using a
                                'one' for a high voltage and a 'zero' for a low
                                voltage. A single BInary digiT (or bit) is
                                either a one or a zero. By grouping together
                                these bits (usually in groups of eight, known as
                                a 'byte') we can create patterns. These patterns
                                can then be used to represent instructions,
                                which tell a computer's processor to do
                                something (like 'add', or 'subtract', or 'store
                                some data' and so on), or data, which can be
                                worked on by the processor. Here is a stream of
                                bytes:
                              </p>
                              <p style="text-align: center">
                                <strong>
                                  11010011 01110000 11010101 10000111 11111101
                                  01010001 11110001 01111100 11000000
                                </strong>
                              </p>
                              <p>
                                The problem here for humans is that it is very
                                difficult for us to read these patterns of ones
                                and zeros. We don't know easily what each of the
                                above patterns represent. What instruction does
                                the first byte represent, or is it a piece of
                                data, or is it in fact partly an instruction and
                                partly data?
                              </p>
                              <p>
                                <strong>Machine code</strong>
                                <br />
                                Every computer has a processor. That processor
                                has a fixed number of instructions which it can
                                carry out. All of the instructions together,
                                which a particular processor can carry out, is
                                known as the 'machine code' for that processor.
                                Any particular instruction can be represented as
                                a binary pattern.
                              </p>
                              <p>
                                <strong>
                                  Low level languages and assembly programs
                                </strong>
                                <br />
                                Early programmers wrote programs in binary,
                                which the processor of a computer could work
                                with although we know humans don't find working
                                with patterns of ones and zeros very easy at
                                all. For this reason, programming 'languages'
                                were developed.
                              </p>
                              <p>
                                The first kind of programming languages were
                                known as 'assembly languages'. These are also
                                known as 'low level languages' because the
                                instructions used in assembly languages are very
                                close to the machine code instructions CPUs use.
                                Instead of writing in binary patterns, which
                                corresponded to machine code instructions,
                                programmers wrote in 'mnemonics'. Here is an
                                example of an assembly program:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>ADD #344A</strong>
                                <br />
                                <strong>DEC IY</strong>
                                <br />
                                <strong> CALL Page</strong>
                                <br />
                                <strong>LD B, #1195</strong>
                              </p>
                              <p>
                                A 'mnemonic' is a code for a processor's
                                instruction, which is easy to remember. 01110111
                                isn't easy to remember but ADD is. It is easier
                                to remember a few hundred mnemonics that make up
                                the machine code for a particular processor than
                                it is to remember a few hundred different bit
                                patterns! Whilst this was an improvement, it was
                                still quite hard to learn how to write programs,
                                to read them and modify them.
                              </p>
                              <p>
                                <strong>High level languages</strong>
                                <br />
                                The next type of language that was developed
                                used actual English words rather than mnemonics.
                                They were known as 'High level languages' and
                                aimed to overcome the problems of learning to
                                read, write and modify programs written in
                                machine code or assembly languages by using
                                English Keywords. These types of languages could
                                now be used to express problems in much the same
                                way as humans might logically solve a problem,
                                which was a major improvement on what went on
                                before. A typical program might look like this:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>WRITE "Press C to continue".</strong>
                                <br />
                                <strong> READ KeyPress</strong>
                                <br />
                                <strong>
                                  WHILE (KeyPress NOT EQUAL TO C) DO
                                </strong>
                                <br />
                                <strong>&nbsp; &nbsp; BEGIN</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; WRITE "Press C to
                                  continue".
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;READ
                                  KeyPress
                                </strong>
                                <br />
                                <strong>&nbsp; &nbsp; END</strong>
                                <br />
                                <strong> ENDWHILE</strong>
                              </p>
                              <p>
                                Can you work out what the above program actually
                                does? You can see real words like 'WRITE' and
                                'READ' in the program. These are known as
                                'keywords' or 'reserved words'. Any particular
                                programming language has a set of these special
                                keywords and the programmer can use them to
                                write programs and make the processor behave in
                                a certain way.
                              </p>
                              <p>
                                There are many different high level languages in
                                existence. You may have heard of some of them:
                                BASIC, Java, JavaScript, Visual Basic, C and so
                                on. They each have their advantages and
                                disadvantages, their fans and people who don't
                                like them and jobs which they are particularly
                                good at being applied to. Can you find the names
                                of some other high level languages and try to
                                find out what sort of jobs they are good at
                                solving?
                              </p>
                              <p>
                                <strong>
                                  Low Level languages versus High Level
                                  Languages
                                </strong>
                              </p>
                              <ul>
                                <li>
                                  Low Level Languages may be more difficult to
                                  use for inexperienced programmers compared to
                                  High Level Languages and they may also not be
                                  as easy to 'read' and understand but they are
                                  very powerful.
                                </li>
                                <li>
                                  <span style="line-height: 16.3636360168457px">
                                    Low Level Languages&nbsp;
                                  </span>
                                  allow you to manipulate the CPU and the
                                  hardware in a computer system in a way that
                                  can't be done using a High Level Language.
                                  They are often used to write drivers for
                                  peripherals and for any control application,
                                  such as the programs that run microwaves, TVs
                                  and other appliances as well as control
                                  systems in factories.&nbsp;
                                </li>
                                <li>
                                  CPUs each have their own set of instructions
                                  that can be used on it, and these are
                                  typically different to the instruction set on
                                  a different type of CPU. High Level Languages
                                  are generally more 'portable'. If you write
                                  them on one type of computer, they should be
                                  able to work most of the time on other types
                                  of computer, whatever CPU it has. Low Level
                                  Languages are written for a specific CPU so if
                                  you want to use them on a different one, you
                                  may well need to modify the code.
                                </li>
                                <li>
                                  When you write a program in a High Level
                                  language, 'abstraction' is used. This simply
                                  means that you take a problem, you break it
                                  down into units and then you write code for
                                  each unit. You don't actually need to know
                                  about the hardware, the CPU, the RAM
                                  addressing, the registers that will run your
                                  program. That's taken care of in the
                                  background. Low Level Languages aren't like
                                  that. There is much less abstraction - you
                                  really do need to know about how the hardware
                                  works and have to be prepared to manipulate
                                  it.
                                </li>
                                <li>
                                  A Low Level Language instruction is typically
                                  translated into fewer machine code
                                  instructions, compared to a High Level
                                  Language instruction.
                                </li>
                              </ul>
                              <p>
                                <strong>&nbsp;</strong>
                              </p>
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

export default High_Level_Languages_and_Low_Level_Languages;
