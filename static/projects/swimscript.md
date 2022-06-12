# Swimscript

---

This is a fun project created by me and a few other members of the ISU swim
club. Currently I'm the only contributor, but hopefully we can get more active
development in the future.

## Premise

The goal of this project is to create a universal markdown langauge for all
swimming practices. This would allow easier documentation of swimming practices
coaches can share practices in a universal format. This would also allow for
data anaysis to be done on swimmers and their practices to get better data on
how to coach and write practices to become the best coaches possible.

## Progress

Currently we have a parser created. We can now parse the swimscript langauge
into an AST, which can be represented in any format.

Here is an example of the format

```
Warm Up: {
    5 * 125 75 swim, @1:45 , 25 drill, 25 kick
    200 IM, Drill / Swim
    4 * 50 Choice, @:55, Variable
}

Prep Set: {
    4 * 25 IMO, @:45
    6 * 50 Free, @1:00, Maxi Mini
    2 * 125 Choice, @1:25/1:30/1:40, Just make it
}

Main Set: {
    3 * {
        100 Free, @1:20/1:30
        200 Free, @2:40/3:00
        300 Free, @4:00/4:30
        400 Free, @5:20/6:00
        - Very short rest to get pull stuff together
        400 Pull, @5:20/6:00
        300 Pull, @4:00/4:30
        200 Pull, @2:40/3:00
        100 Pull, @1:20/1:30
    }
}

Cool Down: {
    50 Destroy
    50 EZ
}
```

## Goals

We want to be able to generate LaTeX from the AST so that we can easily display
information to the non-tech savvy coaches and swimmers.
