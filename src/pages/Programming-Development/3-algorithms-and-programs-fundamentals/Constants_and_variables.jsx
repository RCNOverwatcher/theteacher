import React from "react";

function Constants_and_variables() {
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
                                Constants and variables
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                There are a number of different methods of
                                storing data in a program that a programmer
                                might want to use. Two of the most common ways
                                are by using 'constants' and 'variables'.
                              </p>

                              <p style="text-align: center">
                                <img
                                  src="images/0a30924b-127c-42db-b2ee-9ccf0dc54eb7Constant.GIF"
                                  alt="Constant"
                                />
                              </p>
                              <p>
                                <strong>Constants</strong>
                                <br />A constant is a data value which is fixed.
                                It cannot change, so it is 'constant'. When we
                                write programs in a high level language, we can
                                set up constants by assigning them to a variable
                                which cannot change. If we want to use a
                                constant, we have to 'declare' it first. That
                                means tell the program that it is a constant,
                                give it a name and a value. For example, at the
                                beginning of a Java program, we might declare a
                                constant for pi like this;
                              </p>
                              <p style="margin-left: 30px">
                                <strong>const pi = 3.14</strong>
                              </p>
                              <p>
                                Each time we want to use pi in our program,
                                perhaps to calculate the area of a circle, we
                                can use the actual word 'pi' rather than the
                                actual number in the programming code. Why would
                                we want to do that? The answer to this question
                                is that it makes it easier to read and
                                understand what the code is doing, especially if
                                we have to make changes in the future. There is
                                a second important reason. If the VAT rate (the
                                tax that the Government puts on everything that
                                is sold in shops) is 17.5% at the moment, we
                                might declare a constant like this:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>const VAT = 17.5</strong>
                              </p>
                              <p>
                                Each time we need to do a calculation in our
                                program, we can use the constant VAT instead of
                                17.5, which as we have already said, makes the
                                program easier to read and understand. Imagine
                                that we have used VAT a hundred times in the
                                program. If the Government changes the VAT rate
                                from 17.5% to 20%, we only have to make the
                                change in our program once, where we declared
                                the constant:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>const VAT = 20.0</strong>
                              </p>
                              <p>
                                We don't have to go through the program and
                                change 17.5 to 20.0 everywhere we used the
                                value. By using a constant, we can save
                                ourselves a lot of time when changes have to be
                                made.
                              </p>
                              <p>
                                <strong>Program maintenance</strong>
                                <br />
                                Remember, programs are rarely written and then
                                left to work without any future changes. They
                                change, sometimes years into the future from
                                when they were originally written (perhaps
                                because a bug was found, or a change was made in
                                the law that means the program has to be
                                modified, or the company wants a new feature
                                added, for example). Any change that has to be
                                made may be done by a different person to the
                                original programmer. Making changes in the
                                future in programming is known as 'maintenance'.
                                We therefore have to write programs that are
                                easy to read, understand and change whenever we
                                can so that 'program maintenance' can take
                                place.
                              </p>
                              <p>
                                <strong>Variables</strong>
                                <br />A variable is a name we give to a
                                particular memory location that stores a piece
                                of data. The name we give is more properly
                                called an 'identifier' because it identifies a
                                piece of data. You can think of a variable as a
                                box. The box has a name (an identifier to
                                identify the box) and it stores data. If we want
                                to use a variable, we have to 'declare' it
                                first. That means give it a name and say what
                                kind of data it will hold (a real number, an
                                integer, a string, a Boolean value, and so on).
                                This is done in different ways, depending upon
                                the programming language you are using. For
                                example, in Java:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>int temperature</strong>
                              </p>
                              <p>
                                declares a variable. The identifier is
                                temperature and it holds holds an integer (a
                                whole number, with no decimal parts).
                              </p>
                              <p style="margin-left: 30px">
                                <strong>string surname</strong>
                              </p>
                              <p>
                                declares a variable. The identifier is surname
                                and it holds a string value (anything number of
                                characters from the keyboard).
                              </p>
                              <p>
                                Once you have declared a variable, you can use
                                it in a program. You can have a look at what
                                value the variable is holding. You can use it as
                                part of a calculation and you can change the
                                value it holds. If you know the value you want
                                the variable to start off with in a program, you
                                can declare it and also give it a value at the
                                same time. For example:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>int temperature = 45</strong>
                              </p>
                              <p>
                                declares an Integer variable called
                                'temperature' and gives it 45.
                              </p>
                              <p style="margin-left: 30px">
                                <strong>String surname "Smith"</strong>
                              </p>
                              <p>
                                declares a String variable called 'surname' and
                                gives it a value of 'Smith'.
                              </p>
                              <p>
                                If you forget to declare a variable in a
                                program, you will get an error when you try to
                                translate the program into object code.
                              </p>
                              <p>
                                <strong>Variables and memory locations</strong>
                                <br />
                                What you should notice about a variable is that
                                you, the programmer, have no idea where in
                                memory, in RAM, the data is actually stored. The
                                programmer doesn't need to know. All the
                                programmer needs to know is what the identifier
                                is called and then to use that in their program.
                                In fact, when any program is run a number of
                                different times, it is very likely that the
                                computer will decide to use different memory
                                locations for each identifier every different
                                time! That is fine as far as the programmer is
                                concerned - they will only ever use the
                                identifier. What happens in the background is
                                unimportant to the programmer.
                              </p>
                              <p>
                                <strong>
                                  Changing values held in a variable
                                </strong>
                                <br />
                                Variables are very useful for the above reason.
                                They are also useful because the values in
                                variables can change. We said at the beginning
                                of this section on variables that you can think
                                of a variable as a box with a name (or
                                identifier) on it. At any time while the program
                                is running, the program can reach in and get
                                what is in the box and look at it or use it,
                                simply by using its name. You can also put
                                something new into the box, which overwrites
                                what is already in there. For example, after
                                declaring a variable called temperature and
                                setting it to 45, like this:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>int temperature = 45</strong>
                              </p>
                              <p>
                                we can later in the program change the value of
                                the variable temperature using this instruction:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>temperature = 60</strong>
                              </p>
                              <p>
                                We only need to declare the variable once, but
                                can change the value it holds as many times as
                                we like after it has been declared. Variables
                                are incredibly useful in a program!
                              </p>
                              <p>
                                <strong>Meaningful names</strong>
                                <br />
                                The last thing to say about constants and
                                variables is that they should always be given
                                meaningful names. A constant called 'constant1'
                                or a variable called 'temp1' does not help a
                                program to be easily read, understood and
                                modified in the future. It does not help program
                                maintenance.
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

export default Constants_and_variables;