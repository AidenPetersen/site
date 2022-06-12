# Mercury

---

A chat application over TCP.

## Purpose

I did the project primarily because I enjoy elixir as a language, and I wanted
to use some of its features.

## Premise

The way this project works is by creating a supervision tree. We have to
toplevel dynamic supervisor which is then able to create chatrooms whenever a
user wants to join one. When the first person joins the chatroom, the dynamic
supervisor makes a new genserver which is able to send and receive information
from the user. Whenever the genserver receives data from the user, it broadcasts
it to all of the other users in the chatroom.

It's a highly concurrent program, and in theory, should be very easy to make
distributed across multiple servers.
