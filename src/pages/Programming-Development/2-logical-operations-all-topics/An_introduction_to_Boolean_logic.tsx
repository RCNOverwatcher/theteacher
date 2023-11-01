import React from "react";

function An_introduction_to_Boolean_logic() {
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
                                An introduction to Boolean logic
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                Computers are made up of millions and millions
                                of switches. These switches can be grouped
                                together to form codes. These codes can be used
                                to represent any piece of data. We can also use
                                these switches to control what happens in a
                                computer. A computer needs to be able to say
                                things like:
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      if both this switch and that switch is on,
                                      then do this action.
                                    </li>
                                    <li>
                                      if either one of these switches is on, do
                                      this action.
                                    </li>
                                    <li>
                                      if this switch is on, don't do that
                                      action. If it is off, do that action.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                These kinds of sentences use 'logic'. The
                                manipulation of statements that are either true
                                or false and result in an output that is either
                                true or false is called Boolean logic and is an
                                area of algebra named after a 19<sup>th</sup>{" "}
                                Century Mathematician. We can express Boolean
                                logic using algebraic expressions and we can use
                                logic diagrams as well. The component parts of a
                                logic diagram are called 'logic gates'. Part of
                                the arsenal of any programmer is the ability to
                                manipulate Boolean expressions and that is what
                                this part of the syllabus is about. We are going
                                to introduce the notation that is used by exam
                                boards and the basic logic gates. Unfortunately,
                                there are a number of different versions of
                                notation and different symbols in use but we
                                will only use the ones that the exam boards have
                                said they will use in exams!
                              </p>

                              <p>
                                <strong>Logic gates</strong>
                                <br />
                                Logic diagrams are made up of a number of
                                smaller diagrams, known as 'logic gates'. A
                                logic gate is a hardware component that has some
                                inputs and an output and the gate controls the
                                output depending upon the inputs. You can
                                combine these gates into complicated electronic
                                circuits, which are then added to other
                                components into an 'integrated circuit'.
                                &nbsp;You may have handled integrated circuits -
                                that's what a CPU or a RAM is.
                              </p>
                              <p>
                                Each logic gates has at least one input and only
                                a single output, which depends on the inputs. If
                                a logic diagram has a total of two inputs, then
                                there are two to the power two = 4 possible
                                unique combinations of inputs. If a logic
                                diagram has a total of three inputs, then there
                                are two to the power three = 8 possible unique
                                combinations of inputs.&nbsp;If a logic diagram
                                has a total of four inputs, then there are two
                                to the power four = 16 &nbsp;possible unique
                                combinations of inputs.&nbsp;If a logic diagram
                                has a total of S inputs, then there are 2
                                <sup>s</sup>&nbsp;or two to the power S possible
                                unique combinations of inputs. This is useful to
                                know because it helps you draw up a truth table
                                for any diagram (more on truth tables later)!
                              </p>
                              <p>
                                Before we look at more complicated diagrams,
                                let's look at the basic logic gates first. The
                                most important to get to know are the AND, OR
                                and NOT logic gates.
                              </p>
                              <p>
                                <strong>The AND logic gate</strong>
                              </p>
                              <p style="text-align: center">
                                <img
                                  src="images/a86acd5a-c523-4824-a668-d315bfab2c43AND.GIF"
                                  alt="AND"
                                />
                              </p>
                              <p>
                                This logic gate gives an output if *all* of the
                                inputs are true. If any of the inputs are false
                                then the output is a zero.
                              </p>
                              <p>
                                This kind of logic can be applied to all manner
                                of situations apart from a computer. For
                                example, pupils should stand up if they own a
                                bicycle and own a skateboard. The output is
                                'standing up'. The inputs are 'owning a bicycle'
                                and 'owning a skateboard'. You only stand up if
                                you both own a bicycle AND you own a skateboard.
                                This situation could be represented using the
                                AND logic gate easily, rather than trying to
                                write out accurately who should stand up.
                              </p>
                              <p>
                                We can represent all of the different possible
                                situations using a 'truth table'. The truth
                                table for the AND gate looks like this:
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/cc6197de-edc1-4f38-80b8-634335e1c5a7ANDTT.GIF"
                                  alt="ANDTT"
                                />
                              </p>
                              <p>
                                It simply shows the output for every possible
                                permutation for the AND gate.
                              </p>
                              <p>
                                To show this logic in Boolean notation, we would
                                write:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>A Λ&nbsp;B = C</strong>
                              </p>
                              <p>This is read as, 'A AND B equals C'.</p>
                              <p>
                                The far easier notation to use is AB = C (and
                                sometimes A.B), especially when working with
                                Boolean algebraic equations.
                              </p>
                              <p>
                                <strong>The OR logic gate</strong>
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/5ed3d739-bd0a-4eb4-ae18-9002dbc8a6adOR.GIF"
                                  alt="OR"
                                />
                              </p>
                              <p>
                                This logic gate gives an output if *either* of
                                the inputs are true (or both of them are true).
                                If both of the inputs are false then the output
                                is a zero.
                              </p>
                              <p>
                                Using our example from before, pupils should
                                stand up if they own a bicycle OR own a
                                skateboard. The output is 'standing up'. The
                                inputs are 'owning a bicycle' and 'owning a
                                skateboard'. You stand up if you either own a
                                bicycle OR you own a skateboard (or indeed if
                                you own both). You stay seated if you neither
                                own a bicycle nor own a skateboard. Again, this
                                situation could be represented using the OR
                                logic gate easily, rather than trying to write
                                out accurately who should stand up and who
                                should stay in their seat.
                              </p>
                              <p>
                                We can represent all of the different possible
                                situations using a 'truth table'. The truth
                                table for the OR gate looks like this:
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/d26337a1-08f3-4d86-b7d9-d6d68b43ad79ORTT.GIF"
                                  alt="ORTT"
                                />
                              </p>
                              <p>
                                It shows the output for every possible
                                permutation for the OR gate.
                              </p>
                              <p style="margin-top: 10px">
                                To show this logic in Boolean notation, we would
                                write:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>A V B = C</strong>
                              </p>
                              <p style="margin-bottom: 10px">
                                This is read as, 'A OR B equals C'.
                              </p>
                              <p style="margin-bottom: 10px">
                                <span style="line-height: 16.3636360168457px">
                                  The far easier notation to use is&nbsp;
                                </span>
                                A + B = C especially when working with Boolean
                                algebraic equations.
                              </p>
                              <p>
                                <strong>The NOT logic gate</strong>
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/831f0e78-1698-46cd-b08e-db3aeb7170e2NOT.GIF"
                                  alt="NOT"
                                />
                              </p>
                              <p>
                                This logic gate only has one input. If the input
                                is true, the output if false. If the input is
                                false, the output is true. The truth table for
                                the NOT gate looks like this:
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/a79665b9-0c91-4bf7-8514-2661a5ffbeb8NOTTT.GIF"
                                  alt="NOTTT"
                                />
                              </p>
                              <p style="margin-top: 10px">
                                To show this logic in Boolean notation, we would
                                write:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>¬A = C</strong>
                              </p>
                              <p style="margin-bottom: 10px">
                                This is read as, NOT A equals C'.
                              </p>
                              <p style="margin-bottom: 10px">
                                <span style="line-height: 16.3636360168457px">
                                  The far easier notation to use is
                                </span>
                                &nbsp;
                                <span style="text-decoration: overline">A</span>
                                = C especially when working with Boolean
                                algebraic equations.
                              </p>
                              <p style="margin-bottom: 10px">
                                <strong>The XOR logic gate</strong>
                              </p>
                              <p style="margin-bottom: 10px">
                                <img
                                  style="
                                margin: 10px auto;
                                vertical-align: middle;
                                display: block;
                              "
                                  src="images/3e155f32-0d3b-4d44-92fb-36d656e67dd5XOR.GIF"
                                  alt="XOR"
                                />
                                <br />
                                This logic gate has two inputs. If both inputs
                                are the same, then the output is a 0. If both
                                inputs are different, then the output is a 1.
                                The truth table for the XOR gate looks like
                                this:
                              </p>
                              <p style="margin-bottom: 10px">
                                <img
                                  style="
                                margin: 10px auto;
                                vertical-align: middle;
                                display: block;
                              "
                                  src="images/0b84cb26-9dc7-4b35-98b9-18862b47e438xortruth.GIF"
                                  alt="xortruth"
                                />
                              </p>
                              <p style="margin-bottom: 10px">
                                To show this logic in Boolean notation, we would
                                write:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  A
                                  <span style="text-decoration: underline">
                                    V
                                  </span>
                                  &nbsp;B = C
                                </strong>
                              </p>
                              <p style="margin-bottom: 10px">
                                This is read as, 'A EXCLUSIVE OR B equals C'
                                &nbsp; (EXCLUSIVE as opposed to a normal OR
                                gate, which is INCLUSIVE i.e. the output is a 1
                                when both inputs are a 1.)&nbsp;
                              </p>
                              <p style="margin-bottom: 10px">
                                <span style="line-height: 16.3636360168457px">
                                  The far easier notation to use is&nbsp;
                                </span>
                                <span style="line-height: 16.3636360168457px">
                                  A ⊕ B = C especially when working with Boolean
                                  algebraic equations.
                                </span>
                              </p>
                              <p style="margin-bottom: 10px">
                                <strong>The NAND gate</strong>
                                <br />
                                The NAND gate is the same as an AND gate
                                followed by a NOT gate. It inverts the output
                                from an AND gate.
                              </p>
                              <p style="margin-bottom: 10px">
                                The gate look like this:
                              </p>
                              <p style="margin-bottom: 10px">
                                <img
                                  style="
                                vertical-align: middle;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/d5322013-2bf7-493b-91f2-b770b9cbfed6nandgate.GIF"
                                  alt="nandgate"
                                  width="200"
                                  height="86"
                                />
                              </p>
                              <p style="margin-bottom: 10px">
                                The truth table looks like this:
                              </p>
                              <p style="margin-bottom: 10px">
                                <img
                                  style="
                                vertical-align: middle;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/7075556c-3585-4715-a07c-0d701ee1db29nandtruth.GIF"
                                  alt="nandtruth"
                                  width="105"
                                  height="116"
                                />
                              </p>
                              <p style="margin-bottom: 10px">
                                <span style="line-height: 16.3636360168457px">
                                  To show this logic in the Boolean notation
                                  that OCR uses for questions, we would write:
                                </span>
                              </p>
                              <p style="margin-bottom: 10px; margin-left: 30px">
                                <strong>
                                  <span style="line-height: 16.3636360168457px">
                                    A
                                    <span style="text-decoration: overline">
                                      Λ
                                    </span>
                                    &nbsp;B = C
                                  </span>
                                </strong>
                              </p>
                              <p style="margin-bottom: 10px">
                                <span style="line-height: 16.3636360168457px">
                                  The far easier notation to use in Boolean
                                  equations is
                                </span>
                                &nbsp;
                                <span style="text-decoration: overline">
                                  A.B
                                </span>
                                = C&nbsp;
                              </p>
                              <p style="margin-bottom: 10px">
                                <strong>The NOR gate</strong>
                                <br />
                                The NOR gate is the same as an inverted OR gate.
                                It inverts the output from an OR gate.
                              </p>
                              <p style="margin-bottom: 10px">
                                The gate looks like this:
                              </p>
                              <p style="margin-bottom: 10px">
                                <img
                                  style="
                                vertical-align: middle;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/35f10814-9656-408b-a601-086a6d2964d6norgate.GIF"
                                  alt="norgate"
                                  width="180"
                                  height="92"
                                />
                              </p>
                              <p style="margin-bottom: 10px">
                                The truth table looks like this:
                              </p>
                              <p style="margin-bottom: 10px">
                                <img
                                  style="
                                vertical-align: middle;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/d46adbb6-f832-4719-9fab-a61f783eae1bnortruth.GIF"
                                  alt="nortruth"
                                />
                              </p>
                              <p
                                style="
                              margin-top: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <span style="line-height: 16.3636360168457px">
                                  To show this logic in the Boolean notation
                                  that OCR uses for questions, we would write:
                                </span>
                              </p>
                              <p
                                style="
                              margin-left: 30px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <strong>
                                  A
                                  <span style="text-decoration: underline">
                                    V
                                  </span>
                                  B = C
                                </strong>
                              </p>
                              <p
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <span style="line-height: 16.3636360168457px">
                                  The far easier notation to use in Boolean
                                  equations is
                                </span>
                                &nbsp;
                                <span style="text-decoration: overline">
                                  A + B
                                </span>
                                &nbsp;= C&nbsp;
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

export default An_introduction_to_Boolean_logic;