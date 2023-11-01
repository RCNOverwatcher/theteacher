import React from "react";

function Reverse_Polish() {
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
                                Reverse Polish notation
                              </h1>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Introduction
                                </strong>
                                <br />
                                Computers need to work out the result of
                                algebraic expressions. The way humans work out
                                expressions is not the way that computers work –
                                they are digital not human!
                              </p>

                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Infix notation
                                </strong>
                                <br />
                                If we wanted to add to variables together, such
                                as A and B, we could put the + sign between the
                                A and the B like this:
                              </p>
                              <p
                                class="ContentHeading"
                                style="text-align: left; margin-left: 30px"
                                align="center"
                              >
                                <strong>A + B</strong>
                              </p>
                              <p class="NormalContent">
                                We would read this as “A plus B” and because the
                                + sign is between the two variables, we call
                                this
                                <span class="NormalContentHeading">
                                  <em> '</em>
                                </span>
                                <strong>
                                  <em>infix ‘notation</em>
                                </strong>
                                ’.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Prefix notation
                                </strong>
                                <br />
                                We could also add two variables by saying, “Add
                                A and B”. We would write this down as:
                              </p>
                              <p
                                class="ContentHeading"
                                style="text-align: left; margin-left: 30px"
                                align="center"
                              >
                                <strong>+ AB</strong>
                              </p>
                              <p class="NormalContent">
                                Because we are putting the sign before the
                                variables, we call this ‘prefix notation’. It is
                                also known as
                                <span class="NormalContentHeading">
                                  ‘Polish notation’
                                </span>
                                after the nationality of the person who invented
                                it.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Postfix notation
                                </strong>
                                <br />
                                Finally, we might say, “Take the variable A and
                                the variable B and then add them together”. We
                                would write this down as:
                              </p>
                              <p
                                class="ContentHeading"
                                style="text-align: left; margin-left: 30px"
                                align="center"
                              >
                                <strong>AB +</strong>
                              </p>
                              <p class="NormalContent">
                                Because we are putting the sign after the
                                variables, we call this
                                <span class="NormalContentHeading">
                                  <em>‘postfix notation’</em>
                                </span>
                                . It’s also got another name, ‘
                                <span class="NormalContentHeading">
                                  reverse Polish notation',{" "}
                                </span>
                                because the operators (the plus sign, the minus
                                sign etc) go{" "}
                                <strong>
                                  <em>after</em>
                                </strong>{" "}
                                the operands (the numbers). This is the opposite
                                of Polish notation (or prefix notation), where
                                the operators go
                                <strong>
                                  <em>in front of</em>
                                </strong>{" "}
                                the operands.
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Brackets
                                  </span>
                                </strong>
                                <br />
                                One result of reverse Polish notation is that
                                there is no need for any brackets, like we
                                sometimes put in mathematical expressions we
                                humans do. For example, consider this
                                expression, which uses infix notation:
                              </p>
                              <p
                                class="ContentHeading"
                                style="text-align: left; margin-left: 30px"
                                align="center"
                              >
                                <strong>
                                  ( ( ( 1 + 2) * 4 ) + 7 / (5 + 3)
                                </strong>
                              </p>
                              <p class="NormalContent" align="left">
                                The brackets are important to us humans because
                                of precedance. We need them to ensure the 1 + 2
                                is done before we multiply by 4, for example.
                                Now consider the reverse Polish notation
                                equivalent:
                              </p>
                              <p
                                class="ContentHeading"
                                style="text-align: left; margin-left: 30px"
                                align="center"
                              >
                                <strong>1 2 + 4 * 7 + 5 3 + /</strong>
                              </p>
                              <p class="NormalContent" align="left">
                                This can be interpretted as the following: take
                                1 and 2 and add them to get a result. Then take
                                4 and multiply it to the result to get a new
                                result. Then take 7 and add it to the new
                                result. Then take 5 and 3 and add them. Finally
                                divide the numbers. If you are slightly confused
                                by this, all will become clear in the next
                                section. What you should always remember at this
                                time, however, is that when you reach an
                                operator you go back and get only the last two
                                operands.
                              </p>
                              <p class="NormalContent">
                                <span class="NormalContentHeading">
                                  <strong>
                                    Why do we need Reverse Polish notation?
                                  </strong>
                                  <br />{" "}
                                </span>
                                Y
                                <span class="NormalContent">
                                  ou can see from the last example that we have
                                  removed all the brackets. They are not needed
                                  anymore because the order in which you add,
                                  multiply, subtract and divide, for example, is
                                  absolutely clear and unambiguous. This in
                                  itself is good but reverse Polish notation was
                                  proposed and became widely used because of the
                                  way computers work, using an area of RAM
                                  called the 'stack'. By using reverse Polish
                                  notation, two things result:
                                </span>
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li class="NormalContent">
                                      the number of times a computer has to
                                      access the memory will be reduced
                                    </li>
                                    <li class="NormalContent">
                                      the stack can be used.
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    The stack
                                  </span>
                                </strong>
                                <br />
                                The stack is a special area of memory. It is a
                                data structure in that it holds data items. The
                                interesting property of a stack, however, is
                                that data items leave it in a LAST IN FIRST OUT
                                (or LIFO) order. Think of a spindle of blank
                                DVDs. You put blank DVDs on the spindle. When
                                you want to remove one, you have to remove the
                                one that was put on last - it's impossible to
                                get to ones lower down without removing the top
                                ones first.&nbsp;
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

export default Reverse_Polish;
