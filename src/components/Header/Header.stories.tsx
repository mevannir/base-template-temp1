import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Header from "./Header"

export default {
  title: "Toms Components/Header",
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const HelloWorld = Template.bind({})

HelloWorld.args = {
  label: "Hello world!",
}