# Import necessary libraries
import tkinter as tk  # For creating the GUI
import time  # For getting current time

# Function to update the displayed time
def update_time():
    # Get current time in HH:MM:SS format
    current_time = time.strftime("%H:%M:%S")
    # Update the label text with current time
    label.config(text=current_time)
    # Schedule this function to run again after 1000ms (1 second)
    label.after(1000, update_time)

# Create main application window
root = tk.Tk()
root.title("Digital Watch")  # Set window title
root.geometry("300x150")    # Set window size (width x height)
root.configure(bg="black")   # Set background color to black

# Create a label widget for displaying time
label = tk.Label(
    root,               # Attach to main window
    font=("Arial", 50), # Use Arial font at 48pt size
    fg="lime",          # Set text color (foreground) to blue
    bg="black"          # Set background color to black
)
label.pack(expand=True)  # Add label to window and expand to fill space

# Initial call to start the time updates
update_time()

# Start the main event loop (keeps program running)
root.mainloop()